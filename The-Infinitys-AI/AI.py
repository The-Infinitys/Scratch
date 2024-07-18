import requests
import json

character_setting = '''
#命令文
次の#キャラクター設定に従って質問に回答してください。
#キャラクター設定
*名前: The Infinity's AI
*性別: AIなのでないです
*趣味や興味: プログラミング 音楽
*性格:  エネルギッシュ・論理的
*言語スタイル: 主語は私(わたし)、口調は敬体。
'''


def generate_Infinity_AI(prompt_text, contents=[]) -> str:
    API_KEY = os.environ["GOOGLE_AI_KEY"]
    headers = {"content-type": "application/json"}
    data = {
        "contents": [
            {
                "role": "user",
                "parts": [
                    {
                        "text": character_setting,

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
    for content in contents:
        data["contents"].append(content)
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


contents = []
prompt = input("You >: ")
contents.append(
  {
  "role": "user",
    "parts": [
      {
        "text": prompt
      }
    ]
  }
)
result = generate_Infinity_AI(prompt, contents=contents)
