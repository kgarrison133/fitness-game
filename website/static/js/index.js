const myCanvas = document.getElementById("myCanvas");
const c = myCanvas.getContext("2d");

const CANVAS_WIDTH = (myCanvas.width = 100);
const CANVAS_HEIGHT = (myCanvas.height = 100);

const myImg = document.getElementById("myImg");
const spriteWidth = 86;
const spriteHeight = 86;
let gameFrame = 0;
// to slow down the animation
let stagger = 0;
const staggerFrame = 10;

function animateLoop() {
  if (stagger % staggerFrame == 0) {
    // clear image every single frame
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    c.drawImage(
      myImg,
      spriteWidth * (gameFrame % 5),
      0,
      spriteWidth,
      spriteHeight,
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
    gameFrame++;
    stagger = 0;
  }
  stagger++;

  // loops
  requestAnimationFrame(animateLoop);
}

// animateLoop();

// numFrames, img
function animate() {
  if (stagger == staggerFrame) {
    if (gameFrame >= 5) {
      return;
    } else {
      // clear image every single frame
      c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      c.drawImage(
        myImg,
        spriteWidth * gameFrame,
        0,
        spriteWidth,
        spriteHeight,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
      );
      gameFrame++;
    }
    stagger = 0;
  }
  stagger++;

  // loops
  requestAnimationFrame(animate);
}
animate();
