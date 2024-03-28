let audioFile = document.querySelector("#audioFile");
let imageFile = document.querySelector("#imageFile");
let buttom = document.querySelector("button");
let image = document.querySelector("img");
let audio = document.querySelector("audio");
duration = document.querySelector("p");
//ファイルの読み込み
audioFile.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const blobURL = URL.createObjectURL(file);
  audio.src = blobURL;
  audio.addEventListener("load", function () {
    URL.revokeObjectURL(blobURL);
  });
});

imageFile.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const blobURL = URL.createObjectURL(file);
  image.src = blobURL;
  image.addEventListener("load", function () {
    URL.revokeObjectURL(blobURL);
  });
});
//エンコード処理
function start() {
  //ファイルが入っていないときに処理を弾く
  if (audio.src == "") {
    alert("ファイルが選択されていません！");
    console.log("ファイルが選択されていません");
    return 1;
  }
  audio.play();
  //main
}
function exportSB3(audio64, image64, data) {}
//音声の再生スクリプト
let FFT_SIZE = 64;
let RATE = 1;
var list = [];
const setting = {
  rate: document.querySelector("#setting_rate"),
  fps: document.querySelector("#setting_FPS"),
};
function setFPS() {
  RATE = parseInt(setting.fps.value);
}
function setRate() {
  FFT_SIZE = parseInt(setting.rate.value);
}
// HTML要素
const containerElement = document.querySelector(".container");

const audioElement = document.querySelector("#audio");
audioElement.addEventListener("play", init);
audioVisualData = [];
/**
 * サウンドを再生します
 */
function init() {
  // -------------------------------------
  // HTML要素の初期化
  // -------------------------------------
  setting.fps.disabled = true;
  setting.rate.disabled = true;
  /** @type {HTMLElement[]} */
  const boxes = [];
  // div要素の配置
  for (let i = 0; i < FFT_SIZE / 2; i++) {
    // FFT_SIZE / 2 は 64
    const div = document.createElement("div");
    div.classList.add("box");
    containerElement.append(div);

    boxes[i] = div; // 配列に保存
  }

  // --------------------------------
  // アナライザーの設定を行います
  // --------------------------------
  const context = new AudioContext();

  // アナライザーを生成
  const nodeAnalyser = context.createAnalyser();
  // フーリエ変換を行う分割数。2の乗数でなくてはならない
  nodeAnalyser.fftSize = FFT_SIZE;
  // 0～1の範囲でデータの動きの速さ 0だともっとも速く、1に近づくほど遅くなる
  nodeAnalyser.smoothingTimeConstant = 0.85;
  // オーディオの出力先を設定
  nodeAnalyser.connect(context.destination);

  // audio 要素と紐付ける
  const nodeSource = context.createMediaElementSource(audioElement);
  nodeSource.connect(nodeAnalyser);

  // --------------------------------
  // 繰り返し処理
  // --------------------------------

  let time = 0;
  let data = 0;
  let isCheck = 0;
  let data = [];
  loop();
  /** 描画します */
  function loop() {
    if (audio.currentTime < audio.duration) {
      requestAnimationFrame(loop);
    } else {
      exportSB3(audio.src, image.src, data);
    }
    duration.innerHTML =
      (
        Math.round((audio.currentTime / audio.duration) * 10000) / 10000
      ).toString() + "%";
    // 波形データを格納する配列の生成
    const freqByteData = new Uint8Array(FFT_SIZE / 2);
    // それぞれの周波数の振幅を取得
    nodeAnalyser.getByteFrequencyData(freqByteData);
    isCheck = (isCheck + 1) % (30 / FPS);
    if (isCheck == 0) {
      for (let i = 0; i < freqByteData.length; ++i) {
        data.append(freqByteData[i]);
      }
    }
    // 高さの更新
    for (let i = 0; i < freqByteData.length; i++) {
      const freqSum = freqByteData[i];
      // 値は256段階で取得できるので正規化して 0.0 〜 1.0 の値にする
      const scale = freqSum / 256;
      // Y軸のスケールを変更
      const div = boxes[i];
      div.style.scale = `1 ${scale}`;
      list.push(scale);
    }
  }
}
