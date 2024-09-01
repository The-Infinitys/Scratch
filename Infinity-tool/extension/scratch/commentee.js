if (document.getElementById("comid")) return;
document.body.appendChild(Object.assign(document.createElement("div"), {
  style: ` position:fixed; z-index:10000; bottom:0; left:0; width:100vw; background-color:#855cd6; color:#fff; padding:10px; `,
  innerHTML: `Mention Code : <input id="comid" style="margin:0;width:50%;color:#000;background-color:#fff">`
}));
const w = document.getElementById("comid"),
  i = n => fetch(`//api.scratch.mit.edu/users/${n}/`).then(a => a.json()).then(a => a.id);
XMLHttpRequest.prototype.senda = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = async function(a) {
  const m = w.value.trim();
  if (a.indexOf(`"content":`) 1 && a.indexOf(`"parent_id":`) 1 && a.indexOf(`"commentee_id":`) 1 && m !== "") {
    const g = JSON.parse(a);
    if (m[0] === "@") {
      g.commentee_id = await i(m.substring(1))
    } else if (m[0] === "$") {
      g.commentee_id = Number(m.substring(1))
    } else if (m === "!") {
      g.commentee_id = ""
    } else {
      g.commentee_id = await i(m)
    }
    this.senda(JSON.stringify(g))
  } else {
    this.senda(a)
  }
}

// javascript:(()=%3E%7Bif(document.getElementById(%22comid%22))return;document.body.appendChild(Object.assign(document.createElement(%22div%22),%7Bstyle:%60%20position:fixed;%20z-index:10000;%20bottom:0;%20left:0;%20width:100vw;%20background-color:%23855cd6;%20color:%23fff;%20padding:10px;%20%60,innerHTML:%60Mention%20Code%20:%20%3Cinput%20id=%22comid%22%20style=%22margin:0;width:50%25;color:%23000;background-color:%23fff%22%3E%60%7D));const%20w=document.getElementById(%22comid%22),i=n=%3Efetch(%60//api.scratch.mit.edu/users/$%7Bn%7D/%60).then(a=%3Ea.json()).then(a=%3Ea.id);XMLHttpRequest.prototype.senda=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=async%20function(a)%7Bconst%20m=w.value.trim();if(a.indexOf(%60%22content%22:%60)+1&&a.indexOf(%60%22parent_id%22:%60)+1&&a.indexOf(%60%22commentee_id%22:%60)+1&&m!==%22%22)%7Bconst%20g=JSON.parse(a);if(m%5B0%5D===%22@%22)%7Bg.commentee_id=await%20i(m.substring(1))%7Delse%20if(m%5B0%5D===%22$%22)%7Bg.commentee_id=Number(m.substring(1))%7Delse%20if(m===%22!%22)%7Bg.commentee_id=%22%22%7Delse%7Bg.commentee_id=await%20i(m)%7D%20this.senda(JSON.stringify(g))%7Delse%7Bthis.senda(a)%7D%7D%7D)()
