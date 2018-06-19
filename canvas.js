
//set color constants

const green = "#50ff35";
const yellow = "#f2f241";
const red = "#ff3434";

window.addEventListener('keydown', (event) => {
  // debugger;
  if (event.keyCode === 32) {
    pauseAnimation();
  }
});


window.paused = true;

const pauseAnimation = () => {
  debugger;
  window.paused = window.paused ? false : true
};

const canvas = document.getElementById("bar-bg");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

//accuracy bar background gradient
const gradient = c.createLinearGradient(10,0,350,0);
gradient.addColorStop(0, red);
gradient.addColorStop(0.1, red);
gradient.addColorStop(0.35, yellow);
gradient.addColorStop(0.49, green);
gradient.addColorStop(0.5, green);
gradient.addColorStop(0.51, green);
gradient.addColorStop(0.65, yellow);
gradient.addColorStop(0.9, red);
gradient.addColorStop(1.0, red);

c.fillStyle = gradient;
c.fillRect(10, 10, 350, 30);
c.strokeStyle="#000000";
c.strokeRect(10, 10, 350, 30);



//accuracy bar

const canvas2 = document.getElementById('bar');
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

const c2 = canvas2.getContext('2d');


let x = 185;
let dx = 3;

function animate() {
// debugger;
  if (!window.paused) {
      requestAnimationFrame(animate);
      c2.clearRect(0, 0, innerWidth, innerHeight);
      c2.fillStyle="#f2f2f2";
      c2.fillRect(x, 5, 10, 40);
      c2.strokeStyle="black";
      c2.strokeRect(x, 5, 10, 40);

      if (x > 340 || x < 15) {
        dx = -dx;
      }

      x += dx;
  } else {
    requestAnimationFrame(animate);
  }

  }

// document.getElementById('bar').addEventListener('click')
animate();
//
//
//
//





//
