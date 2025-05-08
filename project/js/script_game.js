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
  audioBtn.innerHTML = 'audio - ' + (audio ? 'ON' : 'OFF');
  playSound(SOUNDS.selection);
}
function muteSounds(mute=true) {
  // SOUNDS.test.muted = mute;
}
