const menus = document.querySelector("#navigation > div > ul");
//add hamburgermenu button
const hamburgermenu_button = document.createElement("li");
hamburgermenu_button.className = "link right hamburger";
hamburgermenu_button.id="hamburger-button";
hamburgermenu_button.innerHTML = `<svg
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <style>
      rect {
        stroke: none;
        fill: #ff8c1a;
      }
    </style>
  </defs>
  <rect x="0" y="15" width="100" height="10" />
  <rect x="0" y="50" width="100" height="10" />
  <rect x="0" y="85" width="100" height="10" />
</svg>
`;
menus.append(hamburgermenu_button);
let hamburger_pos = 0;
let opened_hamburger=false;

hamburgermenu_button.addEventListener("click",()=>{
  opened_hamburger=!opened_hamburger;
  })
const hamburgermenu_animation=()=>{
  const menu_div=document.querySelector("#navigation > div");
  menu_div.style.right="calc(-"+hamburger_pos.toString()+" * min(100vw,360px))";
  if (opened_hamburger){
    hamburger_pos+=0.1;
  }else{
    hamburger_pos-=0.1;
  }
  hamburger_pos=Math.min(1,Math.max(hamburger_pos,0));
  requestAnimationFrame(hamburgermenu_animation);
};
hamburgermenu_animation();
const hamburgermenu = document.createElement("style");
hamburgermenu.innerHTML = `
#hamburger-button{
  position:fixed !important;
  right:0 !important;
  top:5px !important;
  height:40px !important;
  aspect-ratio:1 !important;
}
#navigation > div{
    position:fixed;
    background-color:#855cd6;
    width:min(100vw,360px) !important;
    height:calc(100vh - 50px);
    top:50px;
    right:0;
}
#navigation > div > ul > li.logo{
  position:fixed;
  left:0;
  top:2px;
}
#navigation > .inner{
  display:flex;
  flex-direction:column;
}
#navigation > .inner > ul{
    flex-direction:column;
    padding:3px;
}   
#navigation > .inner > ul > li{
    display:block !important;
    margin-right:auto !important;
    margin-left:0 !important;
}
#navigation > .inner > ul > li:first-child{
    margin-top:50px;
}
#navigation > .inner > ul > li:last-child{
    position:absolute;
    top:0;
}
#navigation > div > ul > li.link.right.join,
#navigation > div > ul > li.link.right.login-item{
    float:left;
}`;
document.body.append(hamburgermenu);
