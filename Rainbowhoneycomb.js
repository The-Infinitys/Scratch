//ダークモード・ライトモード対応

const root3 = 1.7320508;
const RainbowHoneycomb = document.getElementById("RainbowHoneycomb");
function resizeCanvas() {
  RainbowHoneycomb.width = window.innerWidth.toString();
  RainbowHoneycomb.height = window.innerHeight.toString();
}
resizeCanvas();
window.onresize = resizeCanvas;
RainbowHoneycomb.style =
  "position:fixed;width:100%;height:100%;top:0;left:0;z-index:-100;";
const draw = RainbowHoneycomb.getContext("2d");
function honeycomb(x, y, r) {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const darkModeOn = darkModeMediaQuery.matches;
  if (darkModeOn) {
    draw.fillStyle = "black";
  } else {
    draw.fillStyle = "white";
  }
  draw.beginPath();
  draw.moveTo(x, y - r);
  draw.lineTo(x + (root3 / 2) * r, y - r / 2);
  draw.lineTo(x + (root3 / 2) * r, y + r / 2);
  draw.lineTo(x, y + r);
  draw.lineTo(x - (root3 / 2) * r, y + r / 2);
  draw.lineTo(x - (root3 / 2) * r, y - r / 2);
  draw.fill();
}
const radius = 50;
var hsvToRgb16 = function (hue, saturation, value) {
  var result = false;
  if (
    (saturation || saturation === 0) &&
    saturation <= 100 &&
    (value || value === 0) &&
    value <= 100
  ) {
    var red = 0,
      green = 0,
      blue = 0,
      i = 0,
      f = 0,
      q = 0,
      p = 0,
      t = 0;
    hue = Number(hue % 360) / 60;
    saturation = Number(saturation) / 100;
    value = Number(value) / 100;
    if (saturation === 0) {
      red = value;
      green = value;
      blue = value;
    } else {
      i = Math.floor(hue);
      f = hue - i;
      p = value * (1 - saturation);
      q = value * (1 - saturation * f);
      t = value * (1 - saturation * (1 - f));
      switch (i) {
        case 0:
          red = value;
          green = t;
          blue = p;
          break;
        case 1:
          red = q;
          green = value;
          blue = p;
          break;
        case 2:
          red = p;
          green = value;
          blue = t;
          break;
        case 3:
          red = p;
          green = q;
          blue = value;
          break;
        case 4:
          red = t;
          green = p;
          blue = value;
          break;
        case 5:
          red = value;
          green = p;
          blue = q;
          break;
      }
    }
    result = {
      red: Math.round(red * 255).toString(),
      green: Math.round(green * 255).toString(),
      blue: Math.round(blue * 255).toString(),
    };
  }
  return "rgb(" + result.red + "," + result.green + "," + result.blue + ")";
};
var tickcount = 0;
function drawhoneycomb() {
  for (let i = 0; i < RainbowHoneycomb.width; ++i) {
    draw.fillStyle = hsvToRgb16(
      (i * 360) / RainbowHoneycomb.width + tickcount,
      100,
      100
    );
    draw.fillRect(i, 0, 1, RainbowHoneycomb.height);
  }
  for (let i = 0; i < Math.round(RainbowHoneycomb.width / radius) + 2; ++i) {
    for (let j = 0; j < Math.round(RainbowHoneycomb.height / radius) + 2; ++j) {
      honeycomb(
        radius * 2 * i + (j % 2) * radius,
        ((radius * 2 * root3) / 2) * j,
        radius
      );
    }
  }
  tickcount += 1;
}
var framelate = 60;
setInterval(drawhoneycomb, 1 / framelate);
