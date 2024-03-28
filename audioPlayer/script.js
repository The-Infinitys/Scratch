let input = document.querySelector("input");
let buttom = document.querySelector("button");
let audio = document.querySelector("audio");
//ファイルの読み込み
input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const blobURL = URL.createObjectURL(file);
  audio.src = blobURL;
  audio.addEventListener("load", function () {
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

/** フーリエ変換を行う分割数。2の乗数でなくてはならない */
let FFT_SIZE = 32;
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
audioVisualData=[];
/**
 * サウンドを再生します
 */
function init() {
  // -------------------------------------
  // HTML要素の初期化
  // -------------------------------------
  setting.fps.disabled=true;
  setting.rate.disabled=true;
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
  loop();

  /** 描画します */
  function loop() {
    requestAnimationFrame(loop);

    // 波形データを格納する配列の生成
    const freqByteData = new Uint8Array(FFT_SIZE / 2);
    // それぞれの周波数の振幅を取得
    nodeAnalyser.getByteFrequencyData(freqByteData);

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
