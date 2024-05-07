import scratchattach as scratch3
from random import randint
from tcolorpy import tcolor
import time
import datetime
from sys import exit
#サインイン
print("start")
server_num=2
def colorprint(color,text,end="\n"):
    print(tcolor(text,color=color),end=end)
def pixelprint(color):
  print(tcolor("  ",bg_color=color),end="")
def show_px_art(data):
    for y in range(len(data)):
        for x in range(len(data[y])):
            px=data[y][x]
            if px=="0":
                px="#ffffff"
            elif px=="1":
                px="#4e0900"
            else:
                px="#ffab19"
            pixelprint(px)
        print()
b_coffee=[
    "111000000011111",
    "111011111101111",
    "110112221110111",
    "110112112110111",
    "110112112110111",
    "110112221110111",
    "110112112110111",
    "110112112110111",
    "111012221101111",
    "111100000011111"
    ]
check=[
    "012012012012012",
    "120120120120120",
    "201201201201201",
    "012012012012012",
    "120120120120120",
    "201201201201201",
    "012012012012012",
    "120120120120120",
    "201201201201201",
    "012012012012012"
    ]
normal=[
    "111110000022222",
    "111110000022222",
    "111110000022222",
    "111110000022222",
    "111110000022222",
    "111110000022222",
    "111110000022222",
    "111110000022222",
    "111110000022222",
    "111110000022222"
    ]
heart=[
    "111100112002222",
    "111011020220222",
    "110111102222022",
    "110111122222022",
    "110111112222022",
    "111011122220222",
    "111101112202222",
    "111110122022222",
    "111111010222222",
    "111111102222222"
    ]
itimatsu=[
    "121212121212121",
    "212121212121212",
    "121212121212121",
    "212121212121212",
    "121212121212121",
    "212121212121212",
    "121212121212121",
    "212121212121212",
    "121212121212121",
    "212121212121212"
    ]
star=[
    "000000020000000",
    "000011202110000",
    "001111202111100",
    "002222000222200",
    "001120000021100",
    "001112000211100",
    "001120222021100",
    "001120212021100",
    "000202111202000",
    "000220000022000"
    ]
dotCharactor=[
    '000022000220000',
    '110002111200220',
    '101001111102002',
    '110011212112000',
    '101011212112002',
    '110011212110220',
    '000111111111000',
    '000222222222000',
    '000202020202000',
    '000202020202000'
    ]
cat=[
    '000200000002000',
    '000220000022000',
    '000202000202000',
    '000202222202000',
    '000222222222000',
    '000221222122000',
    '000221222122000',
    '000221222122000',
    '000222222222000',
    '000222222222000',
    ]
infinity=[
    '000222222222000',
    '002000000000200',
    '020111000111020',
    '201000101000102',
    '210000010000012',
    '210000010000012',
    '201000101000102',
    '020111000111020',
    '002000000000200',
    '000222222222000',
    ]
creeper=[
    "000011111111000",
    "000011111111000",
    "000012211221000",
    "000012211221000",
    "000011122111000",
    "000011222211000",
    "000011222211000",
    "000011211211000",
    "000001111110000",
    "000001111110000",
    ]
mashroomforest=[
    "220022220022200",
    "200002200002000",
    "220002200022200",
    "222222222221222",
    "222112222211122",
    "221111222111112",
    "211111122220222",
    "222002222220222",
    "122002122120221",
    "111111111111111",
    ]

images=[]
def resetimages():
    global images
    images=[
        b_coffee.copy(),
        check.copy(),
        normal.copy(),
        heart.copy(),
        star.copy(),
        itimatsu.copy(),
        dotCharactor.copy(),
        cat.copy(),
        infinity.copy(),
        creeper.copy(),
        mashroomforest.copy()
    ]
    for image_count in range(len(images)):
        for line_count in range(len(images[image_count])):
            images[image_count][line_count]=convertcolor(images[image_count][line_count],server_num)
            
ids=["707985334","964892496"]
id=ids[server_num-1]
names=["a1",'a2','a3','a4','a5','a6','a7','a8','a9','a10']
#ここでサインイン
conn=[]#ここにクラウドコネクトを入れておく
print("are you ready?")
leng=15
loop=0
timing=[0,1,2,3,4,5,6,7,8,9]
def randcolor():
    result=""
    for i in range(leng):
        result+=str(randint(0,2))
    return result
def convertcolor(code,driver):
    result=""
    if driver==1:
        for i in range(len(code)):
            j=int(code[i])
            result+=str(3*((i+1)%3)+j)
        now=datetime.datetime.now()
        result=int(result)
        result+=now.hour*now.minute*10001
        result=str(result)
    elif driver==2:
        for i in range(len(code)):
            j=int(code[i])
            result+=str(3*((i+1)%2)+j)
    return result
resetimages()
white=convertcolor("0"*15,server_num)
coffee=convertcolor("1"*15,server_num)
orange=convertcolor("2"*15,server_num)
minute=datetime.datetime.now().minute
for power in range(1000):
    if minute != datetime.datetime.now().minute:
        print("一分経過")
        minute=datetime.datetime.now().minute
        resetimages()
    type=len(images)-1#randint(0,len(images)-1)
    for count in range(randint(1,15)):
        for i in range(0,len(names),1):
            code=str(randint(0,2))
            conn[loop].set_var(names[timing[i%len(timing)]],images[type][timing[i%len(timing)]])
            loop=(loop+1)%len(conn)
        print(power)
