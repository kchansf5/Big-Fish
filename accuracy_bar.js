document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const red = canvasEl.getContext("2d");
  red.fillStyle = "red";
  red.fillRect(0, 50, 500, 50);

  const yellow = canvasEl.getContext("2d");
  yellow.fillStyle = "yellow";
  yellow.fillRect(75, 50, 350, 50);

  const green = canvasEl.getContext("2d");
  green.fillStyle = "green";
  green.fillRect(200, 50, 125, 50);

  const bar = canvasEl.getContext("2d");
  bar.fillStyle = "gray";
  bar.strokeStyle = "blue";
  bar.lineWidth = 2;
  bar.fillRect(100, 45, 10, 65);
  bar.strokeRect(100, 45, 10, 65);

});
