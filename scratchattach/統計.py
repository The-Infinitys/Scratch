import requests
import json
import os
import time
import scratchattach as scratch3
import sys
import datetime

json_path="./scratchattach/統計.json"
# check
def get_info():
    return json.loads(open(json_path).read())


info = get_info()
session = scratch3.login("InfinityServerSystem", INFINITY_PASS)
temp_text="""
取り敢えず旗を押して、質問通りに進めてください。
最後にconsoleという名前のリストが表示されると思うので、そこに書かれている内容を全てコピーして、このプロジェクトのコメント欄に投稿してください。
メモとクレジットに回答できた人のリストを書いておく予定です。
"""
# connect: https://scratch.mit.edu/projects/1047954105/
project = session.connect_project("1047954105")
project.set_instructions(temp_text
  +"Now Running: " + datetime.datetime.now().isoformat())
try:
    while True:
        for i in range(2):
            comments = project.comments(limit=5, offset=0)
            for comment in comments:
                  prompt = comment["content"]
                  author = comment["author"]["username"]
                  if author == "The_Infinitys" and prompt.startswith("The-Infinitys: "):
                      # run cmds
                      project.delete_comment(comment_id=comment["id"])
                      command=prompt[len("The-Infinitys: "):]
                      if command=="exit":
                          print("shutdown")
                          project.set_instructions(
                              "Stoped: " + datetime.datetime.now().isoformat()
                          )
                          with open(json_path, mode="w") as f:
                              f.write(json.dumps(info, indent=2, sort_keys=True))
                          os.system("git config user.name github-actions")
                          os.system("git config user.email github-actions@github.com")
                          os.system("git add .")
                          os.system("git pull")
                          os.system(
                              'git commit -m "Saved data: '
                              + datetime.datetime.now().isoformat()
                              + '"'
                          )
                          os.system("git push")
                          sys.exit(0)
                      elif command=="save":
                          with open(json_path, mode="w") as f:
                              f.write(json.dumps(info, indent=2, sort_keys=True))
                          os.system("git config user.name github-actions")
                          os.system("git config user.email github-actions@github.com")
                          os.system("git add .")
                          os.system("git pull")
                          os.system(
                              'git commit -m "Saved data: '
                              + datetime.datetime.now().isoformat()
                              + '"'
                          )
                          os.system("git push")
                  else:
                      data={}
                      try:
                        data=json.loads(prompt)
                      except:
                        print("failed to load data from json.\n"+prompt)
                      info["data"][author]=(
                          {"author": author, "data":data,"date":datetime.datetime.now().isoformat()}
                      )
                      project.delete_comment(comment_id=comment["id"])
                time.sleep(10)
except SystemExit:
    print("succeeded!")
except:
    project.set_instructions(temp_text+"Broken: " + datetime.datetime.now().isoformat())
    print("broken")
    with open(json_path, mode="w") as f:
        f.write(json.dumps(info, indent=2, sort_keys=True))
    os.system("git config user.name github-actions")
    os.system("git config user.email github-actions@github.com")
    os.system("git add .")
    os.system("git pull")
    os.system(
        'git commit -m "Saved AI data: '
        + datetime.datetime.now().isoformat()
        + '"'
    )
    os.system("git push")
    sys.exit(0)
