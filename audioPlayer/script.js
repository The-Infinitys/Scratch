let audioFile = document.querySelector("#audioFile");
let buttom = document.querySelector("button");
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
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

let FFT_SIZE = 64;
let RATE = 1;
function exportSB3(data) {
  project_json = {
    targets: [
      {
        isStage: true,
        name: "Stage",
        variables: {
          "`jEk@4|i[#Fk?(8x)AV.-my variable": ["変数", 0],
          "3%QhHk9WHzY*`?)RZyTK": ["info.level", "10"],
          "QSr)BEEbLIbYiYo5YQEG": ["info.frame", "30"],
        },
        lists: { "ikRGJ+P?T4xvGB5aF#I.": ["analyzed_array", []] },
        broadcasts: {},
        blocks: {},
        comments: {},
        currentCostume: 0,
        costumes: [
          {
            name: "thumbnail",
            bitmapResolution: 2,
            dataFormat: "png",
            assetId: "bfc29213a6f47274117d523b53327a61",
            md5ext: "bfc29213a6f47274117d523b53327a61.png",
            rotationCenterX: 100,
            rotationCenterY: 19,
          },
        ],
        sounds: [],
        volume: 100,
        layerOrder: 0,
        tempo: 60,
        videoTransparency: 50,
        videoState: "on",
        textToSpeechLanguage: null,
      },
      {
        isStage: false,
        name: "main",
        variables: { "iP=$:Uh2?}C.o5MF6Be;": ["point", 72] },
        lists: { "9ub34mvMGCOv/2ehQnt_": ["draw data", []] },
        broadcasts: {},
        blocks: {
          "F[C[FG~1HnkrES*2(YEI": {
            opcode: "event_whenflagclicked",
            next: "0)f4,J{*-EsIx+I(ot(z",
            parent: null,
            inputs: {},
            fields: {},
            shadow: false,
            topLevel: true,
            x: 0,
            y: 0,
          },
          "0)f4,J{*-EsIx+I(ot(z": {
            opcode: "sound_play",
            next: "tzuHC%Q{r#;*%3zZHvA-",
            parent: "F[C[FG~1HnkrES*2(YEI",
            inputs: { SOUND_MENU: [1, "kqvpnslWdN*i8$k!7{C]"] },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "kqvpnslWdN*i8$k!7{C]": {
            opcode: "sound_sounds_menu",
            next: null,
            parent: "0)f4,J{*-EsIx+I(ot(z",
            inputs: {},
            fields: { SOUND_MENU: ["", null] },
            shadow: true,
            topLevel: false,
          },
          "jRcW?JR#f%x|A!MA1q%p": {
            opcode: "sensing_resettimer",
            next: "7`WB#nfk);:H}$AJ5US9",
            parent: "FO-_xS.b2q-V{~Fiq6=*",
            inputs: {},
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "tzuHC%Q{r#;*%3zZHvA-": {
            opcode: "data_setvariableto",
            next: "FO-_xS.b2q-V{~Fiq6=*",
            parent: "0)f4,J{*-EsIx+I(ot(z",
            inputs: { VALUE: [1, [10, "10"]] },
            fields: { VARIABLE: ["info.level", "3%QhHk9WHzY*`?)RZyTK"] },
            shadow: false,
            topLevel: false,
          },
          "jERGQ|doKG=QYlqa6iSK": {
            opcode: "operator_round",
            next: null,
            parent: "c=K4~7)Y|CcC:rh_p%}?",
            inputs: { NUM: [3, "U|2ATqRvaJr9$@Wb6@?n", [4, ""]] },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "U|2ATqRvaJr9$@Wb6@?n": {
            opcode: "operator_divide",
            next: null,
            parent: "jERGQ|doKG=QYlqa6iSK",
            inputs: {
              NUM1: [3, "P2HfhNB?pdA4*00Gg!z.", [4, ""]],
              NUM2: [3, "}at3l4F|L^wG~4d,4`8k", [4, ""]],
            },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "}at3l4F|L^wG~4d,4`8k": {
            opcode: "operator_divide",
            next: null,
            parent: "U|2ATqRvaJr9$@Wb6@?n",
            inputs: {
              NUM1: [1, [4, "1"]],
              NUM2: [3, [12, "info.frame", "QSr)BEEbLIbYiYo5YQEG"], [4, ""]],
            },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "P2HfhNB?pdA4*00Gg!z.": {
            opcode: "sensing_timer",
            next: null,
            parent: "U|2ATqRvaJr9$@Wb6@?n",
            inputs: {},
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "c=K4~7)Y|CcC:rh_p%}?": {
            opcode: "data_setvariableto",
            next: "YjRG9Rz1?]qNS`ZKE`0Y",
            parent: "JR#B)@B=K(*`F5e#~}[h",
            inputs: { VALUE: [3, "jERGQ|doKG=QYlqa6iSK", [10, ""]] },
            fields: { VARIABLE: ["point", "iP=$:Uh2?}C.o5MF6Be;"] },
            shadow: false,
            topLevel: false,
          },
          "7`WB#nfk);:H}$AJ5US9": {
            opcode: "control_forever",
            next: null,
            parent: "jRcW?JR#f%x|A!MA1q%p",
            inputs: { SUBSTACK: [2, ":V7N;rF?D?CufjYCtf7B"] },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "I_y`{+S;;Gvx[aYH.0pr": {
            opcode: "data_itemoflist",
            next: null,
            parent: "L=VVi`+U0w$X?jS]P*^X",
            inputs: { INDEX: [3, "hSjF`XX?BFCGO.a@~C[G", [7, ""]] },
            fields: { LIST: ["analyzed_array", "ikRGJ+P?T4xvGB5aF#I."] },
            shadow: false,
            topLevel: false,
          },
          "YjRG9Rz1?]qNS`ZKE`0Y": {
            opcode: "data_deletealloflist",
            next: "n]f2J_f=bquJs}rkMq~+",
            parent: "c=K4~7)Y|CcC:rh_p%}?",
            inputs: {},
            fields: { LIST: ["draw data", "9ub34mvMGCOv/2ehQnt_"] },
            shadow: false,
            topLevel: false,
          },
          "n]f2J_f=bquJs}rkMq~+": {
            opcode: "control_repeat",
            next: "%zrz/xx8y2@t!E5HXdg3",
            parent: "YjRG9Rz1?]qNS`ZKE`0Y",
            inputs: {
              TIMES: [3, [12, "info.level", "3%QhHk9WHzY*`?)RZyTK"], [6, ""]],
              SUBSTACK: [2, "L=VVi`+U0w$X?jS]P*^X"],
            },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "ue-e62|]aVZA.AZe=6?.": {
            opcode: "data_lengthoflist",
            next: null,
            parent: "93IrgSQgJX_i#n/2%r)x",
            inputs: {},
            fields: { LIST: ["draw data", "9ub34mvMGCOv/2ehQnt_"] },
            shadow: false,
            topLevel: false,
          },
          "93IrgSQgJX_i#n/2%r)x": {
            opcode: "operator_add",
            next: null,
            parent: "hSjF`XX?BFCGO.a@~C[G",
            inputs: {
              NUM1: [3, "ue-e62|]aVZA.AZe=6?.", [4, ""]],
              NUM2: [1, [4, "1"]],
            },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "hSjF`XX?BFCGO.a@~C[G": {
            opcode: "operator_add",
            next: null,
            parent: "I_y`{+S;;Gvx[aYH.0pr",
            inputs: {
              NUM1: [3, "f4lu$#)#`:Y^{r7$M1?q", [4, ""]],
              NUM2: [3, "93IrgSQgJX_i#n/2%r)x", [4, ""]],
            },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "f4lu$#)#`:Y^{r7$M1?q": {
            opcode: "operator_multiply",
            next: null,
            parent: "hSjF`XX?BFCGO.a@~C[G",
            inputs: {
              NUM1: [3, [12, "info.level", "3%QhHk9WHzY*`?)RZyTK"], [4, ""]],
              NUM2: [3, [12, "point", "iP=$:Uh2?}C.o5MF6Be;"], [4, ""]],
            },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "L=VVi`+U0w$X?jS]P*^X": {
            opcode: "data_addtolist",
            next: null,
            parent: "n]f2J_f=bquJs}rkMq~+",
            inputs: { ITEM: [3, "I_y`{+S;;Gvx[aYH.0pr", [10, ""]] },
            fields: { LIST: ["draw data", "9ub34mvMGCOv/2ehQnt_"] },
            shadow: false,
            topLevel: false,
          },
          "JR#B)@B=K(*`F5e#~}[h": {
            opcode: "procedures_definition",
            next: "c=K4~7)Y|CcC:rh_p%}?",
            parent: null,
            inputs: { custom_block: [1, "|UA}nxzFKzgcx$7m_%xY"] },
            fields: {},
            shadow: false,
            topLevel: true,
            x: 0,
            y: 416,
          },
          "|UA}nxzFKzgcx$7m_%xY": {
            opcode: "procedures_prototype",
            next: null,
            parent: "JR#B)@B=K(*`F5e#~}[h",
            inputs: {},
            fields: {},
            shadow: true,
            topLevel: false,
            mutation: {
              tagName: "mutation",
              children: [],
              proccode: "draw",
              argumentids: "[]",
              argumentnames: "[]",
              argumentdefaults: "[]",
              warp: "true",
            },
          },
          ":V7N;rF?D?CufjYCtf7B": {
            opcode: "procedures_call",
            next: null,
            parent: "7`WB#nfk);:H}$AJ5US9",
            inputs: {},
            fields: {},
            shadow: false,
            topLevel: false,
            mutation: {
              tagName: "mutation",
              children: [],
              proccode: "draw",
              argumentids: "[]",
              warp: "true",
            },
          },
          "%zrz/xx8y2@t!E5HXdg3": {
            opcode: "pen_setPenColorToColor",
            next: ",838/APP#,R#$x6*hehh",
            parent: "n]f2J_f=bquJs}rkMq~+",
            inputs: { COLOR: [1, [9, "#b9b9b9"]] },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          ",838/APP#,R#$x6*hehh": {
            opcode: "pen_setPenSizeTo",
            next: "~ATK2[]tqJb.@CVlj4)3",
            parent: "%zrz/xx8y2@t!E5HXdg3",
            inputs: { SIZE: [3, "G=(kk%UzR5]_$+K~p,^E", [4, ""]] },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "o}gs=G2L7[QHuPhH0B4~": {
            opcode: "control_repeat",
            next: null,
            parent: "$DVq(O;zJr?U2uyqyVck",
            inputs: {
              TIMES: [3, [12, "info.level", "3%QhHk9WHzY*`?)RZyTK"], [6, ""]],
              SUBSTACK: [2, "}5w8EKVhT-17dR_h,(=?"],
            },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "$DVq(O;zJr?U2uyqyVck": {
            opcode: "motion_setx",
            next: "o}gs=G2L7[QHuPhH0B4~",
            parent: "~ATK2[]tqJb.@CVlj4)3",
            inputs: { X: [1, [4, "-220"]] },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "l+W}{I0yaGwW#7-4~2xB": {
            opcode: "motion_changexby",
            next: null,
            parent: "J@ogUdr.K?_Q:_)@1~N_",
            inputs: { DX: [3, "ME,|h=C085|B7Q*Wqg,_", [4, ""]] },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "}5w8EKVhT-17dR_h,(=?": {
            opcode: "motion_sety",
            next: "I@/TkDhdoa5*0bTz,,u!",
            parent: "o}gs=G2L7[QHuPhH0B4~",
            inputs: { Y: [1, [4, "-180"]] },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "=O$Q@tnt9oOED;)qrGT/": {
            opcode: "motion_changeyby",
            next: "J??)*y8s7BD?t$lIPLQ{",
            parent: "I@/TkDhdoa5*0bTz,,u!",
            inputs: { DY: [3, "z0y2k3v8W,Sb{jQ_Y;sL", [4, ""]] },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "z0y2k3v8W,Sb{jQ_Y;sL": {
            opcode: "operator_multiply",
            next: null,
            parent: "=O$Q@tnt9oOED;)qrGT/",
            inputs: {
              NUM1: [1, [4, "360"]],
              NUM2: [3, "~:k%9{C;/FY~hEs%2*+N", [4, ""]],
            },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "~ATK2[]tqJb.@CVlj4)3": {
            opcode: "pen_clear",
            next: "$DVq(O;zJr?U2uyqyVck",
            parent: ",838/APP#,R#$x6*hehh",
            inputs: {},
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "I@/TkDhdoa5*0bTz,,u!": {
            opcode: "pen_penDown",
            next: "=O$Q@tnt9oOED;)qrGT/",
            parent: "}5w8EKVhT-17dR_h,(=?",
            inputs: {},
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "^r7lH1Etg}c98iv,zwmO": {
            opcode: "data_itemoflist",
            next: null,
            parent: "~:k%9{C;/FY~hEs%2*+N",
            inputs: { INDEX: [1, [7, "1"]] },
            fields: { LIST: ["draw data", "9ub34mvMGCOv/2ehQnt_"] },
            shadow: false,
            topLevel: false,
          },
          "J??)*y8s7BD?t$lIPLQ{": {
            opcode: "data_deleteoflist",
            next: "J@ogUdr.K?_Q:_)@1~N_",
            parent: "=O$Q@tnt9oOED;)qrGT/",
            inputs: { INDEX: [1, [7, "1"]] },
            fields: { LIST: ["draw data", "9ub34mvMGCOv/2ehQnt_"] },
            shadow: false,
            topLevel: false,
          },
          "J@ogUdr.K?_Q:_)@1~N_": {
            opcode: "pen_penUp",
            next: "l+W}{I0yaGwW#7-4~2xB",
            parent: "J??)*y8s7BD?t$lIPLQ{",
            inputs: {},
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "FO-_xS.b2q-V{~Fiq6=*": {
            opcode: "data_setvariableto",
            next: "jRcW?JR#f%x|A!MA1q%p",
            parent: "tzuHC%Q{r#;*%3zZHvA-",
            inputs: { VALUE: [1, [10, "30"]] },
            fields: { VARIABLE: ["info.frame", "QSr)BEEbLIbYiYo5YQEG"] },
            shadow: false,
            topLevel: false,
          },
          "G=(kk%UzR5]_$+K~p,^E": {
            opcode: "operator_divide",
            next: null,
            parent: ",838/APP#,R#$x6*hehh",
            inputs: {
              NUM1: [1, [4, "480"]],
              NUM2: [3, [12, "info.level", "3%QhHk9WHzY*`?)RZyTK"], [4, ""]],
            },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "ME,|h=C085|B7Q*Wqg,_": {
            opcode: "operator_divide",
            next: null,
            parent: "l+W}{I0yaGwW#7-4~2xB",
            inputs: {
              NUM1: [1, [4, "480"]],
              NUM2: [3, [12, "info.level", "3%QhHk9WHzY*`?)RZyTK"], [4, ""]],
            },
            fields: {},
            shadow: false,
            topLevel: false,
          },
          "~:k%9{C;/FY~hEs%2*+N": {
            opcode: "operator_divide",
            next: null,
            parent: "z0y2k3v8W,Sb{jQ_Y;sL",
            inputs: {
              NUM1: [3, "^r7lH1Etg}c98iv,zwmO", [4, ""]],
              NUM2: [1, [4, "256"]],
            },
            fields: {},
            shadow: false,
            topLevel: false,
          },
        },
        comments: {},
        currentCostume: 0,
        costumes: [
          {
            name: "",
            bitmapResolution: 1,
            dataFormat: "svg",
            assetId: "14e46ec3e2ba471c2adfe8f119052307",
            md5ext: "14e46ec3e2ba471c2adfe8f119052307.svg",
            rotationCenterX: 0,
            rotationCenterY: 0,
          },
        ],
        sounds: [],
        volume: 100,
        layerOrder: 1,
        visible: true,
        x: 0,
        y: 0,
        size: 100,
        direction: 90,
        draggable: false,
        rotationStyle: "all around",
      },
    ],
    monitors: [
      {
        id: "9ub34mvMGCOv/2ehQnt_",
        mode: "list",
        opcode: "data_listcontents",
        params: { LIST: "draw data" },
        spriteName: "main",
        value: [],
        width: 0,
        height: 0,
        x: 5,
        y: 5,
        visible: false,
      },
      {
        id: "ikRGJ+P?T4xvGB5aF#I.",
        mode: "list",
        opcode: "data_listcontents",
        params: { LIST: "analyzed_array" },
        spriteName: null,
        value: [],
        width: 0,
        height: 0,
        x: 114,
        y: 0,
        visible: false,
      },
      {
        id: "3%QhHk9WHzY*`?)RZyTK",
        mode: "default",
        opcode: "data_variable",
        params: { VARIABLE: "info.level" },
        spriteName: null,
        value: 0,
        width: 0,
        height: 0,
        x: 5,
        y: 212,
        visible: false,
        sliderMin: 0,
        sliderMax: 100,
        isDiscrete: true,
      },
      {
        id: "QSr)BEEbLIbYiYo5YQEG",
        mode: "default",
        opcode: "data_variable",
        params: { VARIABLE: "info.frame" },
        spriteName: null,
        value: 0,
        width: 0,
        height: 0,
        x: 5,
        y: 241,
        visible: false,
        sliderMin: 0,
        sliderMax: 100,
        isDiscrete: true,
      },
      {
        id: "iP=$:Uh2?}C.o5MF6Be;",
        mode: "default",
        opcode: "data_variable",
        params: { VARIABLE: "point" },
        spriteName: "main",
        value: 72,
        width: 0,
        height: 0,
        x: 5,
        y: 270,
        visible: false,
        sliderMin: 0,
        sliderMax: 100,
        isDiscrete: true,
      },
    ],
    extensions: ["pen"],
    meta: {
      semver: "3.0.0",
      vm: "2.3.0",
      agent:
        "This was made by @The_Infinitys!",
    },
  };
  project_json.targets[0].lists["ikRGJ+P?T4xvGB5aF#I."][1]=data;
  project_json.targets[0].variables["3%QhHk9WHzY*`?)RZyTK"][1]=FFT_SIZE/2;
  project_json.targets[0].variables["QSr)BEEbLIbYiYo5YQEG"][1]=RATE;
  project_json=JSON.stringify(project_json);
  project_json="data:text/plain,"+project_json;
  document.querySelector("#download").href=project_json;
}
//音声の再生スクリプト
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

  let isCheck = 0;
  let exportdata = [];
  loop();
  /** 描画します */
  function loop() {
    if (audio.currentTime < audio.duration) {
      requestAnimationFrame(loop);
    } else {
      exportSB3(exportdata);
    }
    duration.innerHTML =
      (
        Math.round((audio.currentTime / audio.duration) * 100000) / 1000
      ).toString() + "% finished.";
    // 波形データを格納する配列の生成
    const freqByteData = new Uint8Array(FFT_SIZE / 2);
    // それぞれの周波数の振幅を取得
    nodeAnalyser.getByteFrequencyData(freqByteData);
    isCheck = (isCheck + 1) % (30 / RATE);
    if (isCheck == 0) {
      for (let i = 0; i < freqByteData.length; ++i) {
        exportdata.append(freqByteData[i]);
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
