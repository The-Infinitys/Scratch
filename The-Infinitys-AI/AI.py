import requests
import json
import os
import scratchattach as scratch3

# secrets
STUDIO_KEY = os.environ["GOOGLE_AI_STUDIO_KEY"]
INFINITY_PASS = os.environ["SCRATCH_INFINITYSERVERSYSTEM_PASSWORD"]


class The_Infinitys_AI:
    def __init__()->None:
        self.character_setting = '''
        #命令文
        次の#キャラクター設定に従って質問に回答してください。
        #キャラクター設定
        *名前: The Infinity's AI
        *性別: AIなのでないです
        *趣味や興味: プログラミング 音楽
        *性格:  エネルギッシュ・論理的
        *言語スタイル: 主語は私(わたし)、口調は敬体。
        '''

    def generate(self,prompt_text, contents=[]) -> str:
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
def check()->bool:
    return requests.get(
        "https://develop.the-infinitys.f5.si/Scratch/The-Infinitys-AI/controller.json"
        ).json()["run"]

#TODO: これの続きを書こう
'''
while check():
    already = False
    comments = project.comments(limit = 3)
    for comment in comments:
        pass'''