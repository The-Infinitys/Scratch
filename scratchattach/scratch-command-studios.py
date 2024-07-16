import scratchattach as scratch3
from getpass import getpass
import sys
#関数の生成
def getAllStudios(id):
    a=scratch3.get_project(str(id))
    allStudios=[]
    b=[0]
    count=0
    while len(b)!=0:
        b=a.studios(limit=40,offset=count)
        for x in b:
            allStudios.append(x)
        count+=len(b)
        print(count)
    print(count,"!!!!!!")
    return allStudios

print("start login")
sessions=[]
input_data={"name":input("UserName: "),"pass":input("password: ")}
while input_data!={"name":"","pass":""}:
        sessions.append(scratch3.login(input_data["name"],input_data["pass"]))
        input_data={"name":input("UserName: "),"pass":input("password: ")}
print("complete login")
target_project_id=input("please input project's id: ")
allStudios=getAllStudios(target_project_id)
search_querys=[]
input_data=input("please input search query: ")
while input_data!="":
    search_querys.append(input_data)
    input_data=input("please input search query: ")
def safetyappend(project_id,studio_id,session):
    studio=session.connect_studio(studio_id)
    if studio_id in allStudios:
        print("already")
        return 1
    if studio.open_to_all:
        allStudios.append(studio_id)
        studio.add_project(project_id)
        return 0
    print("can't")
studio_count=len(allStudios)
i=0
session_count=0
search_query_count=0
while True:
    try:
        studios=scratch3.search_studios(query=search_querys[search_query_count],mode="trending",language="ja",limit=40,offset=i)
        if len(studios)==0:
            i=0
            search_query_count+=1
            if search_query_count==len(search_querys):
                print("search completed.")
                sys.exit()
            print("info: change search query")
    except:
        sys.exit()
    i+=40
    for studio in studios:
        try:
            if safetyappend(target_project_id,studio["id"],sessions[session_count])==0:
                studio_count+=1
                print(studio_count)
        except:
            session_count+=1
            if session_count==len(sessions):
                print("All sessions are already used.")
                sys.exit()
            print("info:swap session")