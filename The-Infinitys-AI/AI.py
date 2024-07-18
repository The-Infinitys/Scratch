import requests
import json
import os
import time
import scratchattach as scratch3
import sys
import datetime

# check
def check()->bool:
    return requests.get("https://develop.the-infinitys.f5.si/Scratch/The-Infinitys-AI/controller.json").json()["run"]
if not check():
    sys.exit(0)
# secrets
STUDIO_KEY = os.environ["GOOGLE_AI_STUDIO_KEY"]
INFINITY_PASS = os.environ["SCRATCH_INFINITYSERVERSYSTEM_PASSWORD"]


class The_Infinitys_AI:
    def __init__(self)->None:
        self.character_setting = '''
        #命令文
        次の#キャラクター設定に従って質問に回答してください。
        #キャラクター設定
        *名前: The Infinity's AI
        *趣味や興味: プログラミング 音楽
        *性格:  無限的・論理的
        *言語スタイル: 主語はわたし、極稀に俺、口調は敬体で、「！」や「...」を多用する。
        '''

    def generate(self, contents=[]) -> str:
        API_KEY = STUDIO_KEY
        headers = {"content-type": "application/json"}
        data = {
            "contents": [
                {
                    "role": "user",
                    "parts": [
                        {
                            "text": self.character_setting,
                        }
                    ]
                }, {
                    "role": "model",
                    "parts": [
                        {
                            "text": "了解しました。質問をお願いします。"
                        }
                    ]
                },
            ]
        }
        if type(contents) is list:
            for content in contents:
                data["contents"].append(content)
        elif type(contents) is str:
            data["contents"].append(
                {
                    "role": "user",
                    "parts": [
                        {
                            "text": contents
                        }
                    ]
                }
            )
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
inf_ai=The_Infinitys_AI()
session=scratch3.login("InfinityServerSystem",INFINITY_PASS)

#connect: https://scratch.mit.edu/projects/1047954105/
project=session.connect_project("1047954105")
project.set_instructions("Now Running: "+datetime.datetime.now().isoformat())
while check():
    for i in range(2):
        already = False
        comments = project.comments(limit = 3,offset=0)
        for comment in comments:
            replies = project.get_comment_replies(comment_id=comment["id"], limit=40, offset=0)
            for reply in replies:
                if reply["author"]["username"] == "InfinityServerSystem":
                    already = True
            if already:
                if len(project.get_comment_replies(comment_id=comment["id"], limit=2, offset=0))>1:
                    project.delete_comment(comment_id=comment["id"])
            else:
                prompt=comment["content"]
                author=comment["author"]["username"]
                if author == "The_Infinitys" and prompt == "exit-Infinity":
                    print("shutdown")
                    project.set_instructions("Stoped: "+datetime.datetime.now().isoformat())
                    project.delete_comment(comment_id=comment["id"])
                    sys.exit(0)
                reply_text = inf_ai.generate(contents=author+"からの質問です。\n"+prompt)
                if len(reply_text)>400:
                    reply_text=reply_text[:400]+"...(長すぎたので省略します。)"
                project.reply_comment(content=reply_text, parent_id=comment["id"], commentee_id=comment["author"]["id"])
                print("-"*20)
                print("author:",author)
                print("prompt:",prompt)
                print("content:",reply_text)
                print("-"*20)
            time.sleep(10)
