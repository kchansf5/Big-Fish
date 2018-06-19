// const canvas = document.getElementById("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
//
// canvas.fillRect(100, 100, 100, 100);
// console.log(canvas);

const green = "#50ff35";
const yellow = "#f2f241";
const red = "#ff3434";

const canvas = document.getElementById("bar-bg");
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


const canvas2 = document.getElementById('bar');
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

const c2 = canvas2.getContext('2d');


//
// c2.fillStyle="#f2f2f2";
// c2.fillRect(15, 5, 10, 40);
// c2.strokeStyle="#000000";
// c2.strokeRect(15, 5, 10, 40);

let x = 10;
let dx = 1;

function animate() {
  requestAnimationFrame(animate);
  c2.clearRect(0, 0, innerWidth, innerHeight);
  c2.fillStyle="#f2f2f2";
  c2.fillRect(x, 5, 10, 40);
  c2.strokeStyle="black";
  c2.strokeRect(x, 5, 10, 40);

  x += dx;
}

animate();
//
//
//
//





//
