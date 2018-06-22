// const bgmusic = new Audio("./assets/music/bg-track.mp3");
// bgmusic.volume = 0.5;
//
// function playMusic() {
//   bgmusic.play();
// }

// window.onload = function () {
//   document.getElementById("bg_music").play();
// };

window.onkeydown = function(e) {
  if (e.keyCode === 32 && e.target === document.body) {
    e.preventDefault();
  }
};

const canvas = document.getElementById('result');
canvas.width = 540;
canvas.height = 200;

const c = canvas.getContext('2d');

function mute() {
  music.volume === 0;
}

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


const music = new Audio("./assets/music/bg-track.mp3");

window.addEventListener('keydown', (event) => {
  let result = document.getElementById('result');

  if (event.keyCode === 32) {
    pauseAnimation();
    music.play();
    music.loop = true;
    c.clearRect(0,0,canvas.width,canvas.height);

    let speedMultiplier = 1.05;
    if (x >= 140 && x <= 184) {
      dx *= speedMultiplier;
      // console.log(dx);
      if (window.paused) {
        score += 1;

        const nice = new Image();
        nice.addEventListener('load', function() {
          c.drawImage(nice, 130, 25, 265, 70);
        }, false);
        nice.src = "./assets/images/nice-catch.png";

        c.font = "50px ka";
        c.fillStyle = "black";
        // c.lineWidth = 3;
        // c.strokeStyle = "none";
        // c.fillStyle = "white";
        c.fillText(score, 248, 135);
        // c.strokeText(score, 300, 120);
      }
      // console.log(x);
      // console.log(score);

      initial = false;
    } else if (initial !== true) {
      music.pause();
      const gameover = new Image();
      gameover.addEventListener('load', function() {
        c.drawImage(gameover, 110, 80, 320, 80);
      }, false);
      gameover.src = "./assets/images/game-over-01.png";

      dx = 3;
      // console.log('lost', x);
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
  c2.drawImage(bar, 162, 5, 15, 40);
}, false);
bar.src = "./assets/images/timingbarbar.png";

function animate() {
  if(x >= 141 && x <= 183) {
    // console.log("this should be winning",x);
  }
  if (!window.paused) {
    requestAnimationFrame(animate);

    c2.clearRect(0, 0, innerWidth, innerHeight);
    c2.drawImage(bar, x, 5, 15, 40);

    //bounce the bar back when it reaches the end of the meter
    if (x > 315 || x < 10) {
      // console.log('end', x);
      dx = -dx;
    }
    x += dx;
  } else {

    requestAnimationFrame(animate);
  }
}

animate();





//
