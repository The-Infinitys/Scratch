(()=>{
  if( document.getElementById("comid") ) return;
  document.body.appendChild(Object.assign(document.createElement("div"),{style:`
    position:fixed;
    z-index:10000;
    bottom:0;
    left:0;
    width:100vw;
    background-color:#855cd6;
    color:#fff;
    padding:10px;
  `,innerHTML:`Mention Code : <input id="comid" style="margin:0;width:50%;color:#000;background-color:#fff">`}));
  const w = document.getElementById("comid"),
        i = n=>fetch(`//api.scratch.mit.edu/users/${n}/`).then(a=>a.json()).then(a=>a.id);
  XMLHttpRequest.prototype.senda=XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send=async function(a){
    const m = w.value.trim();
    if( a.indexOf(`"content":`)+1 && a.indexOf(`"parent_id":`)+1 && a.indexOf(`"commentee_id":`)+1 && m!=="" ){
      const g = JSON.parse(a);
      if(m[0]==="@"){
        g.commentee_id = await i(m.substring(1));
      }else if(m[0]==="$"){
        g.commentee_id = Number(m.substring(1));
      }else if(m==="!"){
        g.commentee_id = "";
      }else{
        g.commentee_id = await i(m);
      }
      this.senda(JSON.stringify(g));
    }else{
      this.senda(a);
    }
  }
})();
