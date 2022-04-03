const body = document.querySelector("#canvasWrapper");
const canvas = document.querySelector("#canvas");
const canvasSize = { width: 500, height: 500 };
const trianglePoints = [
  [250, 0],
  [0, 500],
  [500, 500],
];

if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  //   drawTriangle();

  let x = randomPoint();
  let y = randomPoint();
  for (let i = 0; i < 100000; i++) {
    setTimeout(() => {
      let r = randomTrianglePoint();

      x = (trianglePoints[r][0] + x) / 2;
      y = (trianglePoints[r][1] + y) / 2;

      drawDot(x, y);
    }, 100);
  }
} else {
  body.innerHTML = `
    <div class='notSupported'>
    This browser doesn't support canvas,<br/>
    please try a different broswer
    </div>
    `;
}

function randomPoint() {
  return Math.floor(Math.random() * 500);
}

function randomTrianglePoint() {
  return Math.floor(Math.random() * 3);
}

function drawDot(x, y) {
  ctx.fillStyle = "#000000";
  ctx.fillRect(x, y, 2, 2);
}

function drawTriangle() {
  ctx.beginPath();
  ctx.moveTo(...trianglePoints[0]);
  ctx.lineTo(...trianglePoints[1]);
  ctx.lineTo(...trianglePoints[2]);
  ctx.closePath();

  // the outline
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#666666";
  ctx.stroke();
}
