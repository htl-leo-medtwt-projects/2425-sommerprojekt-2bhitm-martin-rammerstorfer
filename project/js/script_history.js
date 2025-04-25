/// <reference path="history.js" />

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
      <div class="section${i === 0 ? ' active' : ''} id="section${i}">
        <h3>${event.year} - ${event.description}</h3>
        <p>${event.description_long}</p>
      </div>
    `;
  }
  document.getElementById('fullpage').innerHTML = outp;
}
load();
