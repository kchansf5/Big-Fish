
//initial position and speed
let x = 25;
let dx = 3;


window.addEventListener('keydown', (event) => {
  let success = document.getElementById('success');
  if (event.keyCode === 32) {
    console.log(x);
    pauseAnimation();
    success.innerText = "";

    if (x > 125 && x < 235) {
      success.innerText = "You got one!";
    } else {
      success.innerText = "No fish yet.";
    }
  }
});

window.paused = true;

const pauseAnimation = () => {
  window.paused = window.paused ? false : true;
};

// const canvas = document.getElementById("bar-bg");
// canvas.width = 360;
// canvas.height = 50;
//
// const c = canvas.getContext('2d');


//set color constants

// const green = "#50ff35";
// const yellow = "#f2f241";
// const red = "#ff3434";
//
// //accuracy bar background gradient
// const gradient = c.createLinearGradient(10,0,350,0);
// gradient.addColorStop(0, red);
// gradient.addColorStop(0.2, red);
// gradient.addColorStop(0.35, yellow);
// gradient.addColorStop(0.495, green);
// gradient.addColorStop(0.5, green);
// gradient.addColorStop(0.505, green);
// gradient.addColorStop(0.65, yellow);
// gradient.addColorStop(0.8, red);
// gradient.addColorStop(1.0, red);

// c.fillStyle = gradient;
// c.fillRect(10, 10, 350, 30);
// c.strokeStyle="#000000";
// c.strokeRect(10, 10, 350, 30);



//accuracy bar

const canvas2 = document.getElementById('bar');
canvas2.width = 370;
canvas2.height = 50;

const c2 = canvas2.getContext('2d');

const bar = new Image();
bar.addEventListener('load', function() {
  c2.drawImage(bar, 25, 5, 15, 40);
}, false);
bar.src = "/Users/Ken/Desktop/a:A/javascript_project/big_fish/images/timingbarbar.png";

function animate() {
  if (!window.paused) {
    requestAnimationFrame(animate);

    c2.clearRect(0, 0, innerWidth, innerHeight);
    c2.drawImage(bar, x, 5, 15, 40);
    // c2.clearRect(0, 0, innerWidth, innerHeight);
    // c2.fillStyle="url('/Users/Ken/Desktop/a:A/javascript_project/big_fish/images/timingbarbar.png')";
    // c2.fillRect(x, 5, 10, 40);
    // c2.strokeStyle="black";
    // c2.strokeRect(x, 5, 1, 40);
    // c2.bar;
    if (x > 335 || x < 25) {
      dx = -dx;
    }

    x += (2 * dx);
  } else {
    requestAnimationFrame(animate);
  }
}

animate();





//
