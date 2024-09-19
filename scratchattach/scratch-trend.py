import scratchattach as scratch3

project_len = 800
project_dur = 40

print("id、title、love、favorites、views、shared、created、modified、remix")

for i in range(0, project_len, project_dur):
    for project in scratch3.explore_projects(query="*", mode="trending", language="en", limit=project_dur, offset=i):
        project.update()
        print(project.id, end="、")
        print(project.title, end="、")
        print(project.loves, end="、")
        print(project.favorites, end="、")
        print(project.views, end="、")
        print(project.share_date[:-5], end="、")
        print(project.created[:-5], end="、")
        print(project.last_modified[:-5], end="、")
        print(project.remix_count)
