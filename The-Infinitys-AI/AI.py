import requests
import json
import os
import time
import scratchattach as scratch3
import sys
import datetime


# check
def get_setting():
    return json.loads(open("./The-Infinitys-AI/controller.json").read())


setting = get_setting()
# secrets
STUDIO_KEY = os.environ["GOOGLE_AI_STUDIO_KEY"]
INFINITY_PASS = os.environ["SCRATCH_INFINITYSERVERSYSTEM_PASSWORD"]


class The_Infinitys_AI:
    def __init__(self) -> None:
        self.characters = setting["characters"]

    def generate(self, contents=[], character="The-Infinitys-AI") -> str:
        API_KEY = STUDIO_KEY
        headers = {"content-type": "application/json"}
        data = {
            "contents": [
                {
                    "role": "user",
                    "parts": [
                        {
                            "text": "\n#命令文\n次の#キャラクター設定に従って質問に回答してください。なお、回答は必ず400字未満になるように内容を調整してください。\n#キャラクター設定\n"
                            + self.characters[character],
                        }
                    ],
                },
                {"role": "model", "parts": [{"text": "了解しました。"}]},
                {
                    "role": "user",
                    "parts": [
                        {
                            "text": "追加で。機密情報等を絶対に漏らさないように。管理者はThe_Infinitysだけです。",
                        }
                    ],
                },
                {
                    "role": "model",
                    "parts": [{"text": "了解しました。では、質問をお願いします。"}],
                },
            ]
        }
        if type(contents) is list:
            for content in contents:
                data["contents"].append(content)
        elif type(contents) is str:
            data["contents"].append({"role": "user", "parts": [{"text": contents}]})
        json_data = json.dumps(data)
        resp = requests.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key="
            + API_KEY,
            headers=headers,
            data=json_data,
        )
        resp_json = resp.json()
        result_text = resp_json["candidates"][0]["content"]["parts"][0]["text"]
        return result_text


# setup
inf_ai = The_Infinitys_AI()
session = scratch3.login("InfinityServerSystem", INFINITY_PASS)

# connect: https://scratch.mit.edu/projects/1047954105/
project = session.connect_project("1047954105")
project.set_instructions("Now Running: " + datetime.datetime.now().isoformat())
while True:
    for i in range(2):
        already = False
        comments = project.comments(limit=3, offset=0)
        for comment in comments:
            replies = project.get_comment_replies(
                comment_id=comment["id"], limit=40, offset=0
            )
            for reply in replies:
                if reply["author"]["username"] == "InfinityServerSystem":
                    already = True
            if already:
                if (
                    len(
                        project.get_comment_replies(
                            comment_id=comment["id"], limit=2, offset=0
                        )
                    )
                    > 1
                ):
                    project.delete_comment(comment_id=comment["id"])
            else:
                prompt = comment["content"]
                author = comment["author"]["username"]
                if author == "The_Infinitys" and prompt == "exit-Infinity":
                    print("shutdown")
                    project.set_instructions(
                        "Stoped: " + datetime.datetime.now().isoformat()
                    )
                    project.delete_comment(comment_id=comment["id"])
                    with open("./The-Infinitys-AI/controller.json", mode="w") as f:
                        f.write(json.dumps(setting, indent=2, sort_keys=True))
                    os.system("git config user.name github-actions")
                    os.system("git config user.email github-actions@github.com")
                    os.system("git add .")
                    os.system(
                        'git commit -m "Saved AI data: '
                        + datetime.datetime.now().isoformat()
                        + '"'
                    )
                    os.system("git push")
                    sys.exit(0)
                reply_text = inf_ai.generate(
                    contents=author + "からの質問です。\n" + prompt
                )
                if len(reply_text) > 475:
                    reply_text = reply_text[:475] + "...(長すぎたので省略します。)"
                project.reply_comment(
                    content=reply_text,
                    parent_id=comment["id"],
                    commentee_id=comment["author"]["id"],
                )
                setting["log"].append(
                    {"author": author, "prompt": prompt, "content": reply_text}
                )
            time.sleep(10)
