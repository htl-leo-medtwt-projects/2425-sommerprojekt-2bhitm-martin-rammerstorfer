let GAME_CONFIG = {
  gameSpeed: 8
};

let FRAME = {
  elem: document.getElementById('gameFrame'),
  titleScreen: document.getElementById('titleScreen')
};

let PLAYER = {
  box: document.getElementById('ship'),
  spriteImg: document.getElementById('shipImg'),
  speed: 1,
  lives: 3
};


let ASTEROIDS = [];
for (let i = 0; i < 12; i++) {
  let outp = '';
  outp += `
    <div class="asteroid" id="asteroid${i}">
      <img class="asteroidImg" id="asteroidImg${i}" src="img/game/asteroid-${i+1}.png" alt="*"/>
    </div>
  `;
  FRAME.elem.innerHTML += outp;
  ASTEROIDS.push({
    box: document.getElementById(`asteroid${i}`),
    spriteImg: document.getElementById(`asteroidImg${i}`),
    isActive: false
  });
}

function startGame() {
  showGameScreen();
  gameLoop();
}

function showGameScreen() {
  FRAME.elem.style.backgroundImage = 'url(./img/game/empty_space_2.jpg)';
  document.getElementById('titleScreen').style.display = 'none';

  document.getElementById('ship').style.display = 'block';

  for (let i = 0; i < ASTEROIDS.length; i++) {
    ASTEROIDS[i].box.style.display = 'block';
  }
  // FRAME.elem.style.backgroundRepeat = 'repeat';
  // FRAME.elem.style.backgroundSize = '50%';
}

function showTitleScreen() {
  document.getElementById('titleScreen').style.display = 'block';

  document.getElementById('ship').style.display = 'none';
  for (let i = 0; i < ASTEROIDS.length; i++) {
    ASTEROIDS[i].box.style.display = 'none';
  }

  FRAME.elem.style.backgroundImage = 'url(./img/game/empty_space_2.jpg)';
  // FRAME.elem.style.backgroundRepeat = 'repeat';
  // FRAME.elem.style.backgroundSize = '50%';
}



/***********************************
 * MOVE
 * **********************************/
/**
 * @param {number} dx - player x move offset in pixel
 * @param {number} dy - player y move offset in pixel
 * @param {number} dr - player heading direction (-1: look left || 1: look right)
 */
function movePlayer(dx, dy, dr) {
  // save original position
  let originalX = parseFloat(document.getElementById('ship').style.left);
  let originalY = parseFloat(document.getElementById('ship').style.top);

  // calculate new position
  document.getElementById('ship').style.left = `calc(${originalX}px + ${dx}%)`;
  document.getElementById('ship').style.top = `calc(${originalY}px + ${dy}%)`;


  // update sprite direction if needed
  // if (dr != 0 && dr != PLAYER.spriteDirection) {
  //     PLAYER.spriteDirection = dr;
  //     document.getElementById('ship').style.transform = `scaleX(${dr})`;
  // }

  // animatePlayer();

  // output in debugger box
  // GAME_SCREEN.debug_output.innerHTML = `x: ${document.getElementById('ship').style.left} | y: ${document.getElementById('ship').style.top} | direction: ${dr} | animation: ${PLAYER.spriteImgNumber} | count: ${PLAYER.pageCount}`;
}

function moveAsteroid(asteroid, dx, dy, dr) {
  // save original position
  let originalX = parseFloat(asteroid.style.left);
  let originalY = parseFloat(asteroid.style.top);

  // calculate new position
  asteroid.style.left = `calc(${originalX}px + ${dx}%)`;
  asteroid.style.top = `calc(${originalY}px + ${dy}%)`;


  // update sprite direction if needed
  // if (dr != 0 && dr != PLAYER.spriteDirection) {
  //     PLAYER.spriteDirection = dr;
  //     document.getElementById('ship').style.transform = `scaleX(${dr})`;
  // }

  // animatePlayer();

  // output in debugger box
  // GAME_SCREEN.debug_output.innerHTML = `x: ${document.getElementById('ship').style.left} | y: ${document.getElementById('ship').style.top} | direction: ${dr} | animation: ${PLAYER.spriteImgNumber} | count: ${PLAYER.pageCount}`;
}

let asteroidTimer = 0;

function gameLoop() {
  let moveX = 0;
  let moveY = 0;
  let moveDir = 0;

  if (KEY_EVENTS.left && parseFloat(document.getElementById('ship').style.left) > 5) {
    moveX += -1;
    moveDir += -1;
  }
  if (KEY_EVENTS.right && parseFloat(document.getElementById('ship').style.left) < 745) {
    moveX += 1;
    moveDir += 1;
  }
  if (KEY_EVENTS.up && parseFloat(document.getElementById('ship').style.top) > 10) {
    moveY += -1;
  }
  if (KEY_EVENTS.down && parseFloat(document.getElementById('ship').style.top) < 340) {
    moveY += 1;
  }

  if (moveX != 0 && moveY != 0) {
    moveX *= Math.sqrt(2)/2;
    moveY *= Math.sqrt(2)/2;
  }

  if (moveX != 0 || moveY != 0) {
    movePlayer(moveX * PLAYER.speed, moveY * PLAYER.speed, moveDir);
  }

  if (asteroidTimer > 8) {
    asteroidTimer = 0;
    for (let i = 0; i < ASTEROIDS.length; i++) {
      if (!ASTEROIDS[i].isActive) {
        ASTEROIDS[i].isActive = true;
        break;
      }
    }
  }

  for (let i = 0; i < ASTEROIDS.length; i++) {
    if (ASTEROIDS[i].isActive) {
      document.getElementsByClassName('asteroid')[i].style.display = 'block';
      moveAsteroid(document.getElementsByClassName('asteroid')[i], -1, 0, 0);
    } else {
      document.getElementsByClassName('asteroid')[i].style.display = 'none';
    }
    
    if (isColliding(PLAYER.box, document.getElementsByClassName('asteroid')[i], -20)) {
      ASTEROIDS[i].isActive = false;
      PLAYER.lives--;
      if (PLAYER.lives == 0) {
        gameOver();
      }
    }
  }

  asteroidTimer++;
  
  setTimeout(gameLoop, 1000 / GAME_CONFIG.gameSpeed); // async recursion
}

function gameOver() {
  showTitleScreen();
  console.log('game over')
}


/**
 * Checks intersection between two html elements
 * @param {HTMLElement} div1 - Reference to first html element (PLAYER)
 * @param {HTMLElement} div2 - Reference to second html element (ITEM)
 * @param {number} tolerance - Integer to change accuracy of collission (0: default, negative number: detect later, positive number: detect earlier) 
 * @returns {boolean} - true or false depending on collision
 */
function isColliding(div1, div2, tolerance = 0) {
  let d1Rect = div1.getBoundingClientRect();
  let d2Rect = div2.getBoundingClientRect();

  return !(d1Rect.right + tolerance < d2Rect.left || d1Rect.left - tolerance > d2Rect.right || d1Rect.bottom + tolerance < d2Rect.top || d1Rect.top - tolerance > d2Rect.bottom);
};




// function toggleAudio() {
//   audio = !audio;
//   if (audio) music.play();
//   else music.pause();
//   document.getElementById('btn_mute').src = (audio ? '&#x1f507;' : '&#x1f50a;');
// }

let SOUNDS = {
  // test: ???
}
let audio = false;
function toggleAudio() {
  audio = !audio;
  muteSounds(!audio);
  let audioBtn = document.getElementById('audio');
  audioBtn.innerHTML = audio ? '&#x1f50a;' : '&#x1f508;';
  // playSound(SOUNDS.selection);
}
function muteSounds(mute=true) {
  // SOUNDS.test.muted = mute;
  
}

// import BigText from 'big-text.js';

// BigText("#gameTitle",{
// 	rotateText: 0,
// 	fontSizeFactor: 1,
// 	maximumFontSize: null,
// 	limitingDimension: null,
// 	horizontalAlign: null,
// 	verticalAlign: null,
// 	textAlign: null,
// 	whiteSpace: null,
// });

let fullscreen = false;

function openFullscreen() {
  let elem = document.getElementById('gameContainer');
  elem.style.position = 'fixed';
  elem.style.width = '100vw';
  elem.style.height = '100vh';
  elem.style.zIndex = '999';
  elem.style.top = '0';
  elem.style.left = '0';
  elem.style.border = 'none';
  let header = document.getElementById('header');
  header.style.top = '-16vh';
  let audio = document.getElementById('audio');
  audio.style.fontSize = '40px';
  let btn = document.getElementById('fullscreen');
  btn.onclick = closeFullscreen;
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-fullscreen-exit" viewBox="0 0 16 16">
      <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z"/>
    </svg>
  `;
  btn.style.textShadow = '';
  btn.style.filter = `drop-shadow(0 2px 0 black) drop-shadow(0 -2px 0 black) drop-shadow(-2px 0 black) drop-shadow(2px 0 black)`;
  fullscreen = true;
}
function closeFullscreen() {
  let elem = document.getElementById('gameContainer');
  elem.style.position = 'relative';
  elem.style.width = '65vw';
  elem.style.height = '65vh';
  elem.style.zIndex = '0';
  elem.style.border = '2px solid var(--color-accent4)';
  let audio = document.getElementById('audio');
  audio.style.fontSize = '30px';
  let header = document.getElementById('header');
  header.style.top = '0';
  let btn = document.getElementById('fullscreen');
  btn.onclick = openFullscreen;
  btn.innerHTML = '&#x26f6;';
  btn.style.textShadow = `
    0 1px 0 black,
    0 -1px 0 black,
    -1px 0 0 black,
    1px 0 0 black,
    2px 2px 0 black,
    -2px 2px 0 black,
    2px -2px 0 black,
    -2px -2px 0 black,
    0 2px 0 black,
    0 -2px 0 black,
    -2px 0 black,
    2px 0 black,
    1px 2px 0 black,
    -1px 2px 0 black,
    1px -2px 0 black,
    -1px -2px 0 black,
    2px 1px 0 black,
    -2px 1px 0 black,
    2px -1px 0 black,
    -2px -1px 0 black`;
  btn.style.filter = '';
  fullscreen = false;
}
