function createAnimation(
  canvasId,
  imgId,
  numFrames,
  numLoops,
  imgWidth,
  spriteHeight
) {
  const myCanvas = document.getElementById(canvasId);
  let c = myCanvas.getContext("2d");

  console.log(c);

  const CANVAS_WIDTH = (myCanvas.width = 100);
  const CANVAS_HEIGHT = (myCanvas.height = 100);

  const myImg = document.getElementById(imgId);
  const spriteWidth = imgWidth / numFrames;
  //   const spriteWidth = 86;
  //   const spriteHeight = 86;
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
        spriteWidth * (gameFrame % numFrames),
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

  // numFrames, img
  function animate() {
    if (stagger == staggerFrame) {
      if (gameFrame >= numFrames) {
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

  //   determine how many times to loop
  //   Loop animation
  if (numLoops == 0) {
    animateLoop();
  } else {
    // Single animation
    animate();
  }
}

// player battle animation
// createAnimation("p-battleCanvas", "p-battleImg", 5, 0, 430, 86);
createAnimation("runCanvas", "runImg", 7, 0, 500, 86);
