
//initial position and speed
let x = 25;
let dx = 3;


window.addEventListener('keydown', (event) => {
  let success = document.getElementById('success');
  if (event.keyCode === 32) {
    console.log(x);
    pauseAnimation();
    success.innerText = "";

    if (x >= 129 && x <= 225) {
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

//accuracy bar

const canvas2 = document.getElementById('bar');
canvas2.width = 370;
canvas2.height = 50;

const c2 = canvas2.getContext('2d');

const bar = new Image();
bar.addEventListener('load', function() {
  // c2.drawImage(bar, 177, 5, 15, 40);
  c2.drawImage(bar, 177, 5, 15, 40);
}, false);
bar.src = "/Users/Ken/Desktop/a:A/javascript_project/big_fish/images/timingbarbar.png";

function animate() {
  if (!window.paused) {
    requestAnimationFrame(animate);

    c2.clearRect(0, 0, innerWidth, innerHeight);
    c2.drawImage(bar, x, 5, 15, 40);

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
