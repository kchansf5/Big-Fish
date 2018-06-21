//enter to start
//'f' to start fishing
//'space' to stop fishing

//initial position and speed
let x = 25;
let dx = 3;

let score = 0;

window.paused = true;

const pauseAnimation = () => {
  window.paused = window.paused ? false : true;
};

let initial = true;

window.addEventListener('keydown', (event) => {
  let result = document.getElementById('result');

  if (event.keyCode === 32) {
    pauseAnimation();
    result.innerText = "";

    let speedMultiplier = 1.1;
    if (x >= 129 && x <= 225) {
      dx *= speedMultiplier;
      // console.log(dx);
      if (window.paused) {
        score += 1;
        result.innerText = `You got ${score}!`;
      }
      console.log(x);
      console.log(score);

      initial = false;
    } else if (initial !== true) {
      result.innerText = "Game Over.";
      dx = 3;
      console.log('lost', x);
      x = 25;
      score = 0;
      initial = true;
    } else {
      initial = false;
    }
  }
});



//accuracy bar

const canvas2 = document.getElementById('bar');
canvas2.width = 370;
canvas2.height = 50;

const c2 = canvas2.getContext('2d');

//draw the white bar
const bar = new Image();
bar.addEventListener('load', function() {
  c2.drawImage(bar, 177, 5, 15, 40);
}, false);
bar.src = "/Users/Ken/Desktop/a:A/javascript_project/big_fish/images/timingbarbar.png";

const multiplier = 1;

function animate() {
  if (!window.paused) {
    requestAnimationFrame(animate);

    c2.clearRect(0, 0, innerWidth, innerHeight);
    c2.drawImage(bar, x, 5, 15, 40);

    //bounce the bar back when it reaches the end of the meter
    if (x > 335 || x < 25) {
      dx = -dx;
    }
    x += dx;
  } else {
    requestAnimationFrame(animate);
  }
}

animate();





//
