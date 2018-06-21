//enter to start
//'f' to start fishing
//'space' to stop fishing
const canvas = document.getElementById('result');
canvas.width = 340;
canvas.height = 200;

const c = canvas.getContext('2d');



const canvas2 = document.getElementById('bar');
canvas2.width = 340;
canvas2.height = 50;

const c2 = canvas2.getContext('2d');

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
    if (x >= 141 && x <= 183) {
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
      c.font = "50x Georgia";
      c.fillText('GAME OVER', 140, 10);
      // result.innerText = "Game Over.";
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

//draw the white bar
const bar = new Image();
bar.addEventListener('load', function() {
  //right limit is 335
  //left limit is 5
  c2.drawImage(bar, 162, 5, 15, 40);
  // c2.drawImage(bar, 177, 5, 15, 40);
}, false);
bar.src = "/Users/Ken/Desktop/a:A/javascript_project/big_fish/images/timingbarbar.png";

function animate() {
  if(x >= 141 && x <= 183) {
    console.log("this should be winning",x);
  }
  if (!window.paused) {
    requestAnimationFrame(animate);

    c2.clearRect(0, 0, innerWidth, innerHeight);
    c2.drawImage(bar, x, 5, 15, 40);

    //bounce the bar back when it reaches the end of the meter
    if (x > 315 || x < 10) {
      console.log('end', x);
      dx = -dx;
    }
    x += dx;
  } else {

    requestAnimationFrame(animate);
  }
}

animate();





//
