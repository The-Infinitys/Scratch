let input=document.querySelector("input");
let buttom=document.querySelector("button");
let audio = document.querySelector("audio");
//ファイルの読み込み
file.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const blobURL = URL.createObjectURL(file);
  audio.src = blobURL;
  audio.addEventListener("load", function () {
    URL.revokeObjectURL(blobURL);
  });
});
//エンコード処理
start=()=>{
  //ファイルが入っていないときに処理を弾く
  if (audio.src==""){
    alert("ファイルが選択されていません！");
    return 1;
  }
  //main

};