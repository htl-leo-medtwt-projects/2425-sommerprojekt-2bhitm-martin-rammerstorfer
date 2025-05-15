function startGame() {
  let frame = document.getElementById('gameFrame');
  frame.innerHTML = '';
}

function toggleAudio() {
  audio = !audio;
  if (audio) music.play();
  else music.pause();
  document.getElementById('btn_mute').src = (audio ? '&#x1f507;' : '&#x1f50a;');
}

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
// 	rotateText: {Number},
// 	fontSizeFactor: {Number},
// 	maximumFontSize: {Number},
// 	limitingDimension: {String},
// 	horizontalAlign: {String},
// 	verticalAlign: {String},
// 	textAlign: {String},
// 	whiteSpace: {String},
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
  elem.style.padding = '0'
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
  elem.style.padding = '6px';
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

document.addEventListener('keyup', (key) => {
  if (key.code === 'KeyF') {
    if (fullscreen) closeFullscreen();
    else openFullscreen();
  } else if (key.code === 'KeyM') {
    toggleAudio();
  } else if (key.code === 'Escape') {
    if (fullscreen)
    closeFullscreen();
  }
});
