let GAME_CONFIG = {
  gameSpeed: 32
};

let FRAME = {
  elem: document.getElementById('gameFrame'),
  titleScreen: document.getElementById('titleScreen')
};

let PLAYER = {
  box: document.getElementById('ship'),
  spriteImg: document.getElementById('shipImg'),
  x: 5,
  y: 40,
  speed: 0.4,
  lives: 4
};

let PROJECTILES = [];
for (let i = 0; i < 6; i++) {
  let outp = '';
  outp += `
    <div class="projectile" id="projectile${i}">
      
    </div>
  `;
  // <img class="projectileImg" id="projectileImg${i}" src="img/game/projectile-${i+1}.png" alt="->"/>
  FRAME.elem.innerHTML += outp;
  PROJECTILES.push({
    box: document.getElementById(`projectile${i}`),
    spriteImg: document.getElementById(`projectileImg${i}`),
    x: 5,
    y: 40,
    isActive: false
  });
}

let ASTEROIDS = [];

function startGame() {
  ASTEROIDS = [];
  for (let i = 0; i < 20; i++) {
    let outp = '';
    outp += `
      <div class="asteroid" id="asteroid${i}">
        <img class="asteroidImg" id="asteroidImg${i}" src="img/game/asteroid-${(i%12+1)}.png" alt="*"/>
      </div>
    `;
    FRAME.elem.innerHTML += outp;
    ASTEROIDS.push({
      box: document.getElementById(`asteroid${i}`),
      spriteImg: document.getElementById(`asteroidImg${i}`),
      x: 105,
      y: 5,
      scale: 1,
      speedMult: 1,
      isActive: false
    });
  }

  
  ASTEROID_MIN = 10;
  ASTEROID_MULT = 10;
  ASTEROID_SPEED = 0.5;
  ASTEROID_SPEED_MULTI_KULTI = 0.25;

  document.getElementById('healthbar').style.width = "96%";
  document.getElementById('healthbar').style.backgroundColor = "chartreuse";
  
  showGameScreen();
  gameLoop();
}

function showGameScreen() {
  FRAME.elem.style.backgroundImage = 'url(./img/game/empty_space_2.jpg)';
  document.getElementById('titleScreen').style.display = 'none';

  document.getElementById('ship').style.display = 'block';

  document.getElementById('score').style.display = 'block';
  document.getElementById('health').style.display = 'block';

  // for (let i = 0; i < ASTEROIDS.length; i++) {
  //   ASTEROIDS[i].box.style.display = 'block';
  // }
  // FRAME.elem.style.backgroundRepeat = 'repeat';
  // FRAME.elem.style.backgroundSize = '50%';
}

function showTitleScreen() {
  document.getElementById('titleScreen').style.display = 'block';

  document.getElementById('ship').style.display = 'none';
  for (let i = 0; i < ASTEROIDS.length; i++) {
    ASTEROIDS[i].box.style.display = 'none';
  }

  document.getElementById('score').style.display = 'none';
  document.getElementById('health').style.display = 'none';

  document.getElementById('start').innerHTML = 'new&thinsp;game';

  document.getElementById('gameFrame').style.backgroundImage = 'url(./img/game/empty_space_2.jpg)';
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
  PLAYER.direction = dr;
  PLAYER.x += dx;
  PLAYER.y += dy;

  // calculate new position
  document.getElementById('ship').style.left = `${PLAYER.x}%`;
  document.getElementById('ship').style.top = `${PLAYER.y}%`;


  // update sprite direction if needed
  // if (dr != 0 && dr != PLAYER.spriteDirection) {
  //     PLAYER.spriteDirection = dr;
  //     document.getElementById('ship').style.transform = `scaleX(${dr})`;
  // }

  // animatePlayer();

  // output in debugger box
  // GAME_SCREEN.debug_output.innerHTML = `x: ${document.getElementById('ship').style.left} | y: ${document.getElementById('ship').style.top} | direction: ${dr} | animation: ${PLAYER.spriteImgNumber} | count: ${PLAYER.pageCount}`;
}

function moveAsteroid(index, dx, dy, dr) {
  ASTEROIDS[index].x += dx;
  ASTEROIDS[index].y += dy;

  let elem = document.getElementsByClassName('asteroid')[index];
  elem.style.left = `${ASTEROIDS[index].x}%`;
  elem.style.top = `${ASTEROIDS[index].y}%`;
  elem.style.scale = `${ASTEROIDS[index].scale}`;
}
function moveProjectile(index, dx, dy, dr) {
  PROJECTILES[index].x += dx;
  PROJECTILES[index].y += dy;

  let elem = document.getElementsByClassName('projectile')[index];
  elem.style.left = `${PROJECTILES[index].x}%`;
  elem.style.top = `${PROJECTILES[index].y}%`;
}

let asteroidTime = 80;
let asteroidTimer = 0;
let shootingTimer = 0;
let difficultyTimer = 0;

let ASTEROID_MIN = 10;
let ASTEROID_MULT = 10;
let ASTEROID_SPEED = 0.5;
let ASTEROID_SPEED_MULTI_KULTI = 0.25;

let stopLoop = false;
function gameLoop() {
  if (difficultyTimer > 500) {
    ASTEROID_MIN = 8;
    ASTEROID_MULT = 8;
    ASTEROID_SPEED = 0.6;
    ASTEROID_SPEED_MULTI_KULTI = 0.3;
  } else if (difficultyTimer > 1000) {
    ASTEROID_MIN = 8;
    ASTEROID_MULT = 7;
    ASTEROID_SPEED = 0.65;
    ASTEROID_SPEED_MULTI_KULTI = 0.4;
  } else if (difficultyTimer > 1500) {
    ASTEROID_MIN = 7;
    ASTEROID_MULT = 7;
    ASTEROID_SPEED = 0.75;
    ASTEROID_SPEED_MULTI_KULTI = 0.5;
  } else if (difficultyTimer > 2000) {
    ASTEROID_MIN = 5;
    ASTEROID_MULT = 6;
    ASTEROID_SPEED = 0.9;
    ASTEROID_SPEED_MULTI_KULTI = 0.6;
  } else if (difficultyTimer > 2500) {
    ASTEROID_MIN = 4;
    ASTEROID_MULT = 4;
    ASTEROID_SPEED = 1.1;
    ASTEROID_SPEED_MULTI_KULTI = 0.7;
  } else if (difficultyTimer > 3000) {
    ASTEROID_MIN = 3;
    ASTEROID_MULT = 3;
    ASTEROID_SPEED = 1.3;
    ASTEROID_SPEED_MULTI_KULTI = 0.9;
  }

  document.getElementById('score').innerHTML = `${Math.floor(difficultyTimer/50)} LIGHTYEAR${Math.floor(difficultyTimer/50) == 1 ? '' : 'S'}`;
  console.log(difficultyTimer)

  let moveX = 0;
  let moveY = 0;
  let moveDir = 0;

  if (KEY_EVENTS.left && PLAYER.x > 5) {
    moveX += -1;
    moveDir += -1;
  }
  if (KEY_EVENTS.right && PLAYER.x < 75) {
    moveX += 1;
    moveDir += 1;
  }
  if (KEY_EVENTS.up && PLAYER.y > 20) {
    moveY += -1;
  }
  if (KEY_EVENTS.down && PLAYER.y < 75) {
    moveY += 1;
  }

  if (moveX != 0 && moveY != 0) {
    moveX *= Math.sqrt(2)/2;
    moveY *= Math.sqrt(2)/2;
  }

  if (moveX != 0 || moveY != 0) {
    movePlayer(moveX * PLAYER.speed, moveY * PLAYER.speed, moveDir);
  }

  if (asteroidTimer > asteroidTime) {
    asteroidTime = ASTEROID_MIN+Math.floor(Math.random()*ASTEROID_MULT);
    asteroidTimer = 0;
    for (let i = 0; i < ASTEROIDS.length; i++) {
      if (!ASTEROIDS[i].isActive) {
        ASTEROIDS[i].isActive = true;
        ASTEROIDS[i].y = 8+Math.floor(Math.random()*72);
        ASTEROIDS[i].x = 105;
        ASTEROIDS[i].scale = Math.random()*0.4+0.8;
        ASTEROIDS[i].speedMult = Math.random()*ASTEROID_SPEED_MULTI_KULTI+(1-ASTEROID_SPEED_MULTI_KULTI/2);
        break;
      }
    }
  }

  if (shootingTimer > 40 && KEY_EVENTS.space) {
    shootingTimer = 0;
    shoot();
  }

  for (let i = 0; i < ASTEROIDS.length; i++) {
    if (ASTEROIDS[i].isActive) {
      if (ASTEROIDS[i].x < -5) {
        ASTEROIDS[i].isActive = false;
      } else {
        document.getElementsByClassName('asteroid')[i].style.display = 'block';
        moveAsteroid(i, -1*ASTEROID_SPEED*ASTEROIDS[i].speedMult, 0, 0);
      }
    } else {
      document.getElementsByClassName('asteroid')[i].style.display = 'none';
    }
    
    if (ASTEROIDS[i].isActive && isColliding(document.getElementById('ship'), document.getElementsByClassName('asteroid')[i], -20)) {
      ASTEROIDS[i].isActive = false;
      PLAYER.lives--;
      if (PLAYER.lives == 3) {
        document.getElementById('healthbar').style.width = "64%";
        document.getElementById('healthbar').style.backgroundColor = "yellow";
      }
      if (PLAYER.lives == 2) {
        document.getElementById('healthbar').style.width = "32%";
        document.getElementById('healthbar').style.backgroundColor = "orange";
      }
      if (PLAYER.lives == 1) {
        document.getElementById('healthbar').style.width = "3%";
        document.getElementById('healthbar').style.backgroundColor = "red";
      }
      if (PLAYER.lives == 0) {
        PLAYER.lives = 4;
        stopLoop = true;
        gameOver();
      }
    }
  }

  for (let i = 0; i < PROJECTILES.length; i++) {
    if (PROJECTILES[i].isActive) {
      if (PROJECTILES[i].x > 105) {
        PROJECTILES[i].isActive = false;
      } else {
        document.getElementsByClassName('projectile')[i].style.display = 'block';
        moveProjectile(i, 1, 0, 0);
      }
    } else {
      document.getElementsByClassName('projectile')[i].style.display = 'none';
    }
    
    for (let j=0; j<ASTEROIDS.length; j++) {
      if (PROJECTILES[i].isActive && ASTEROIDS[j].isActive && isColliding(document.getElementsByClassName('asteroid')[j], document.getElementsByClassName('projectile')[i], 0)) {
        PROJECTILES[i].isActive = false;
        ASTEROIDS[j].isActive = false;
      }
    }
  }

  asteroidTimer++;
  shootingTimer++;
  difficultyTimer++;
  
  if (!stopLoop) {
    setTimeout(gameLoop, 1000 / GAME_CONFIG.gameSpeed); // async recursion
  } else {
    stopLoop = false;
  }
}

function shoot() {
  for (let i = 0; i < PROJECTILES.length; i++) {
    if (!PROJECTILES[i].isActive) {
      PROJECTILES[i].isActive = true;
      PROJECTILES[i].y = PLAYER.y+2;
      PROJECTILES[i].x = PLAYER.x+10;
      break;
    }
  }
}

function gameOver() {
  asteroidTimer = 0;
  shootingTimer = 0;
  difficultyTimer = 0;
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
  document.getElementById('gameTitle').style.fontSize = "40px";
  document.getElementById('start').style.fontSize = "50px";
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
  document.getElementById('gameTitle').style.fontSize = "30px";
  document.getElementById('start').style.fontSize = "40px";
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
