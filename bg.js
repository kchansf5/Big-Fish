const canvas = document.getElementById("background-canvas");
canvas.width = 1000;
canvas.height = 500;

const c = canvas.getContext('2d');

let bg = new Image();

bg.src = "sky-bg.png";


function Background() {
  this.x = 0, this.y = 0, this.w = bg.width, this.h = bg.height;
  this.render = function(){
    c.drawImage(bg, this.x--, 0);

  };
}
