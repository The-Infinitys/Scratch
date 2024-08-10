const Scratch_Infinity_framework = {
  source: {
    html: ``,
    css: `
    #Scratch-Infinity-tools{
      position:fixed;
      width:360px;
      height:100%;
      top:0;
      right:0;
      background-color:black;
      color:white;
    }`,
  },
  init: () => {
    const frame_html = document.createElement("div");
    frame_html.innerHTML = Scratch_Infinity_framework.source.html;
    frame_html.id = "Scratch-Infinity-tools";
    document.body.append(frame_html);
    const frame_css = document.createElement("style");
    frame_css.innerHTML = Scratch_Infinity_framework.source.css;
    document.body.append(frame_css);
  },
  main: () => {
    Scratch_Infinity_framework.init();
  },
};

Scratch_Infinity_framework.main();