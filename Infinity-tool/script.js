const Scratch_Infinity_framework = {
  source: {
    html: `
    <section data-class="head">
    <img width:24px; src="https://develop.the-infinitys.f5.si/image/The-Infinitys.webp" crossorigin="anonymous" />
    <h1>Infinity tool</h1>
    <button id="Scratch-Infinity-tools-max">⬜︎</button>
    </section>
    <div data-class="tools">
    </div>`,
    css: `
    #Scratch-Infinity-tools{
      position:fixed;
      z-index:10000000000;
      width:min(100%,max(280px,50vw));
      height:100%;
      top:0;
      right:0;
      background-color:black;
      color:white;
      font-family:system-ui,sans-serif;
    }
    #Scratch-Infinity-tools>section[data-class="head"]{
      display:flex;
      flex-shrink:0;
      width:100%;
    }
    #Scratch-Infinity-tools>section[data-class="head"]>img{
      margin-top:3px;
      margin-right:4px;
      width:30px;
      height:30px;
    }
    #Scratch-Infinity-tools>section[data-class="head"]>h1{
      font-size:30px;
      margin:0;
    }
    #Scratch-Infinity-tools-max{
      position:fixed;
      width:40px;
      height:30px;
      top:2px;
      right:40px;
      background-color:black;
      border:1px solid white;
    }
    #Scratch-Infinity-tools-min{
      position:fixed;
      z-index:100000000000;
      width:40px;
      height:30px;
      top:2px;
      right:0;
      background-color:black;
      border:1px solid white;
    }
    #Scratch-Infinity-tools>div[data-class="tools"]{
      position:absolute;
      top:35px;
      left:0;
      width:100%;
      height:calc(100%-35px);
      background-color:#111;
    }
    `,
  },
  display: {
    max: () => {
      const tools = document.querySelector("#Scratch-Infinity-tools");
      const max_button = document.querySelector("#Scratch-Infinity-tools-max");
      if (tools.style.width == "100%") {
        tools.style.width = null;
        max_button.innerHTML = "⬜︎";
      } else {
        tools.style.width = "100%";
        max_button.innerHTML = "◻︎";
      }
    },
    min: () => {
      const min_button = document.querySelector("#Scratch-Infinity-tools-min");
      const tools = document.querySelector("#Scratch-Infinity-tools");
      if (tools.style.display == "none") {
        tools.style.display = "";
        min_button.style.opacity = "1";
      } else {
        tools.style.display = "none";
        min_button.style.opacity = "0";
      }
    },
  },
  init: () => {
    const frame_html = document.createElement("div");
    frame_html.innerHTML = Scratch_Infinity_framework.source.html;
    frame_html.id = "Scratch-Infinity-tools";
    document.body.append(frame_html);
    const frame_css = document.createElement("style");
    frame_css.innerHTML = Scratch_Infinity_framework.source.css;
    document.body.append(frame_css);
    const min_button = document.createElement("button");
    min_button.innerHTML = "x";
    min_button.id = "Scratch-Infinity-tools-min";
    min_button.addEventListener(
      "click",
      Scratch_Infinity_framework.display.min
    );
    document
      .querySelector("#Scratch-Infinity-tools-max")
      .addEventListener("click", Scratch_Infinity_framework.display.max);
    document.body.append(min_button);
  },
  main: () => {
    Scratch_Infinity_framework.init();
  },
};
Scratch_Infinity_framework.main();
