const menus = document.querySelector("#navigation > div > ul");
const hamburgermenu_button = document.createElement("li");
hamburgermenu_button.className = "link right hamburger";
hamburgermenu_button.style =
  "position:fixed;right:0;top:5px;height:40px;aspect-ratio:1;";
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
const hamburgermenu = document.createElement("div");
hamburgermenu.style =
  "position:fixed;width:min(100vw,360px);height:calc(100vh-50px);top:50px;right:0;background-color:#855cd6;color:white;";
hamburgermenu.innerHTML = menus.innerHTML;
document.body.append(hamburgermenu);
