
//set color constants

const green = "#50ff35";
const yellow = "#f2f241";
const red = "#ff3434";

let x = 125;
let dx = 3;


window.addEventListener('keydown', (event) => {
  // debugger;
  let success = document.getElementById('success');
  if (event.keyCode === 32) {
    pauseAnimation();
    if (x > 160 && x < 200) {
      success.innerText = "success";
      // console.  log(x);
    } else {
      success.innerText = "";
    }
  }
});


window.paused = true;

const pauseAnimation = () => {
  // debugger;
  window.paused = window.paused ? false : true;
};

const canvas = document.getElementById("bar-bg");
canvas.width = 360;
canvas.height = 50;

const c = canvas.getContext('2d');

//accuracy bar background gradient
const gradient = c.createLinearGradient(10,0,350,0);
gradient.addColorStop(0, red);
gradient.addColorStop(0.2, red);
gradient.addColorStop(0.35, yellow);
gradient.addColorStop(0.495, green);
gradient.addColorStop(0.5, green);
gradient.addColorStop(0.505, green);
gradient.addColorStop(0.65, yellow);
gradient.addColorStop(0.8, red);
gradient.addColorStop(1.0, red);

c.fillStyle = gradient;
c.fillRect(10, 10, 350, 30);
c.strokeStyle="#000000";
c.strokeRect(10, 10, 350, 30);



//accuracy bar

const canvas2 = document.getElementById('bar');
canvas2.width = 370;
canvas2.height = 50;

const c2 = canvas2.getContext('2d');


function animate() {
// debugger;
  if (!window.paused) {
    requestAnimationFrame(animate);
    c2.clearRect(0, 0, innerWidth, innerHeight);
    c2.fillStyle="#f2f2f2";
    c2.fillRect(x, 5, 10, 40);
    c2.strokeStyle="black";
    c2.strokeRect(x, 5, 10, 40);
    // console.log(x);
    if (x > 335 || x < 25) {
      dx = -dx;
    }

    x += (2 * dx);
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
