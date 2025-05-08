/// <reference path="data/history.js" />

let historyFullpage = new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: true,
  scrollingSpeed: 500,
});

function load() {
  let outp = '';
  for (let i = 0; i < timeline.length; i++) {
    let event = timeline[i];
    outp += `
      <div class="section${i === 0 ? ' active' : ''}" id="section${i}">
        <div class="year">
          <span class="yearyear">${event.year}</span>
          <span class="yeardate">${event.date}</span>
        </div>
        <div class="text">
          <h3>${event.description}</h3>
          <p>${event.description_long}</p>
          <div class="historyMedia">${getMedia(event)}</div>
        </div>
      </div>
    `;
  }
  document.getElementById('fullpage').innerHTML = outp;
}
load();

function getMedia(event) {
  let outp = '';
  for (let i = 0; i < Math.min(event.images.length, 1); i++) {
    outp += `<img src="${event.images[i]}">`;
  }
  for (let i = 0; i < Math.min(event.videos.length, 1); i++) {
    outp += `<video controls><source src="${event.videos[i]}" type="video/mp4"></video>`;
  }
  for (let i = 0; i < Math.min(event.audios.length, 1); i++) {
    outp += `<audio controls><source src="${event.audios[i]}" type="audio/mpeg"></audio>`;
  }
  return outp;
}
