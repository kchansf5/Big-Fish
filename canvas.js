// const canvas = document.getElementById("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
//
// canvas.fillRect(100, 100, 100, 100);
// console.log(canvas);

const green = "#50ff35";
const yellow = "#f2f241";
const red = "#ff3434";

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

//accuracy bar background
const gradient = c.createLinearGradient(10,0,370,0);
gradient.addColorStop(0, red);
gradient.addColorStop(0.1, red);
gradient.addColorStop(0.35, yellow);
gradient.addColorStop(0.45, green);
gradient.addColorStop(0.5, green);
gradient.addColorStop(0.55, green);
gradient.addColorStop(0.65, yellow);
gradient.addColorStop(0.9, red);
gradient.addColorStop(1.0, red);

c.fillStyle = gradient;
c.fillRect(10, 10, 370, 30);
c.strokeStyle="#000000";
c.strokeRect(10, 10, 370, 30);

c.fillStyle="#f2f2f2";
c.fillRect(15, 5, 10, 40);
c.strokeStyle="#000000";
c.strokeRect(10, 10, 370, 30);

function animate() {
  requestAnimationFrame(animate);

}

animate();
