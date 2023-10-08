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

  const CANVAS_WIDTH = (myCanvas.width = spriteHeight + 20);
  const CANVAS_HEIGHT = (myCanvas.height = spriteHeight + 20);

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
// createAnimation("e-battleCanvas", "e-battleImg", 5, 0, 640, 128);
// createAnimation("runCanvas", "runImg", 7, 0, 500, 86);

const player = {
  canvas: "p-battleCanvas",
  img: "p-battleImg",
  frames: 5,
  loops: 0,
  width: 430,
  height: 86,
};

const enemy = {
  canvas: "e-battleCanvas",
  img: "e-battleImg",
  frames: 5,
  loops: 0,
  width: 640,
  height: 128,
};

battleChar = [player, enemy];
i = 0;
let el = document.getElementById("#battle-fight");
let battleContent;

function battleAnimation() {
  i == 0 ? (i = 1) : (i = 0);
  let character = battleChar[i];
  if ((i = 1)) {
    battleContent =
      '<img src="../static/assets/characters/Ghost/Dead.png" id="e-battleImg" /></canvas>';
  } else {
    battleContent =
      '<canvas id="p-battleCanvas"><img src="../static/assets/characters/knight/Attack 1.png" id="p-battleImg"/>canvas>';
  }

  createAnimation(
    character.canvas,
    character.img,
    character.frames,
    character.loops,
    character.width,
    character.height
  );
  el.insertAdjacentHTML("afterbegin", battleContent);
  setTimeout(battleAnimation, 5000);
}

battleAnimation();
