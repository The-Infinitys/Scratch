import scratchattach as scratch3
from random import randint
from sys import exit
#サインイン
print("start")
server_num=1
ids=["707985334","964892496"]
id=ids[server_num-1]
names=["1",'2','3','4','5','6','7','8','9','10']
session1=scratch3.login("遊佐ねむ","見せる訳ないだろ٩( ᐛ )و")
session2=scratch3.login("使い方は","察してください")
conn=[
    session1.connect_cloud(id),
    session2.connect_cloud(id)
    ]
print(len(names))
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
images=[
    b_coffee,
    check,
    normal,
    heart,
    star,
    itimatsu,
    dotCharactor,
    cat
    ]
print("are you ready?")
leng=15
loop=0
timing=[0,1,2,3,4]
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
    elif driver==2:
        for i in range(len(code)):
            j=int(code[i])
            result+=str(3*((i+1)%2)+j)
    return result

#データをあらかじめ変換する
for image_count in range(len(images)):
    for line_count in range(len(images[image_count])):
        images[image_count][line_count]=convertcolor(images[image_count][line_count],server_num)
white=convertcolor("0"*15,server_num)
coffee=convertcolor("1"*15,server_num)
orange=convertcolor("2"*15,server_num)
for power in range(100000):
    type=randint(0,len(images)-1)
    for count in range(randint(1,15)):
        for i in range(0,len(names),1):
            code=str(randint(0,2))
            conn[loop].set_var(names[timing[i%len(timing)]],white)
            loop=(loop+1)%len(conn)
        print(power)
