const myCanvas = document.getElementById("myCanvas");
const c = myCanvas.getContext("2d");

const CANVAS_WIDTH = (myCanvas.width = 100);
const CANVAS_HEIGHT = (myCanvas.height = 100);

const myImg = document.getElementById("myImg");
const spriteWidth = 88;
const spriteHeight = 88;
let gameFrame = 0;
let stagger = 0;
const staggerFrame = 10;

function animate() {
  if (stagger == staggerFrame) {
    if (gameFrame < 6) {
      c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      //   change game frame automatically
      let frameX = spriteWidth * gameFrame;
      let frameY = spriteHeight * gameFrame;

      c.drawImage(
        myImg,
        frameX,
        frameY,
        spriteWidth,
        spriteHeight,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
      );
      gameFrame++;
    } else {
      gameFrame = 0;
    }
    stagger = 0;
  }
  stagger++;

  requestAnimationFrame(animate);
}

animate();
