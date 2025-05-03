/// <reference path="data/ships.js" />
/// <reference path="data/media.js" />
/// <reference path="data/characters.js" />

gsap.registerPlugin(ScrollTrigger);
function setAnimation(elem, startY, duration) {
  gsap.set(elem, {
    y: startY,
    opacity: 0
  });
  gsap.to(elem, {
    y: 0,
    opacity: 1,
    duration: duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,
      start: '-280% 80%'
    }
  });
}

function checkFilter(m) {
  let filter = document.getElementById('filter').value;
  return filter === 'all' || m.type === filter;
}

function load() {
  let outp = '';
  let mediaArrFiltered = mediaArr.filter(m => checkFilter(m));
  
  let sortBy = document.getElementById('sort').value;
  switch (sortBy) {
    case 'date':
      mediaArrFiltered.sort((a, b) => {
        let dateA = a.firstAired || '';
        let dateB = b.firstAired || '';
        return dateA.localeCompare(dateB);
      });
      break;
    case 'title':
      mediaArrFiltered.sort((a, b) => {
        return extractTitle(a.name).localeCompare(extractTitle(b.name));
      });
      break;
    case 'runtime':
      mediaArrFiltered.sort((a, b) => {
        let runA = a.type === 'film' ? a.totalLengthMinutes : a.avgLengthMinutes;
        let runB = b.type === 'film' ? b.totalLengthMinutes : b.avgLengthMinutes;
        return runA - runB;
      });
      break;
  }

  if (mediaArrFiltered.length === 0) {
    outp += `<p id="none_found">No matching media found</p>`;
  }
  for (let i = 0; i < mediaArrFiltered.length; i++) {
    let m = mediaArrFiltered[i];
    if (m.type === 'series') {
      outp += `
        <div class="mediaElement" onclick="popUp(this, ${i})">
          <div class="img_container"><img src="img/media/${m.images[0].path}" alt="${m.name}"></div>
          <h3>${m.name}</h3>
          <p class="description">${m.description}</p>
          <p><b>Seasons:</b> ${m.seasons}</p>
          <p><b>Episodes:</b> ${m.episodes}</p>
          <p><b>Runtime:</b> ${m.avgLengthMinutes} minutes</p>
        </div>
      `;
    } else if (m.type === 'film') {
      outp += `
        <div class="mediaElement" onclick="popUp(this, ${i})">
          <div class="img_container"><img src="img/media/${m.images[0].path}" alt="${m.name}"></div>
          <h3>${m.name}</h3>
          <p class="description">${m.description}</p>
          <p><b>Length:</b> ${m.totalLengthMinutes} minutes</p>
          <p><b>Release date:</b> ${m.firstAired}</p>
        </div>
      `;
    }
  }
  document.getElementById('media_container').innerHTML = outp;
  
  for (let i = 0; i < mediaArrFiltered.length; i++) {
    let elem = document.getElementsByClassName('mediaElement')[i];
    switch (i % 3) {
      case 0:
        setAnimation(elem, '300%', 0.6);
        break;
      case 1:
        setAnimation(elem, '300%', 0.8);
        break;
      case 2:
        setAnimation(elem, '300%', 1);
        break;
    }
  }
}
load();

function extractTitle(str) {
  let colonIndex = str.indexOf(':');
  if (colonIndex !== -1) {
    str = str.substring(colonIndex + 1).trim();
  }
  return str.replace(/^(star trek\s*)/i, '');
}

function popUp(elem, n) {
  let outp = '';

  let m = mediaArr.filter(m => checkFilter(m))[n];

  if (m.type === 'series') {
    outp += `
        <div class="img_container"><img src="img/media/${m.images[0].path}" alt="${m.name}"></div>
        <div class="info_container">
          <h3>${m.name.replace(/ /g, '&thinsp;')}</h3>
          <p class="description">${m.description}</p>
          <p><b>Seasons:</b> ${m.seasons}</p>
          <p><b>Episodes:</b> ${m.episodes}</p>
          <p><b>Runtime:</b> ${m.avgLengthMinutes} minutes</p>
          <p><b>First aired:</b> ${m.firstAired}</p>
          <p><b>Last aired:</b> ${m.lastAired}</p>
        </div>
    `;
  } else if (m.type === 'film') {
    outp += `
      <div class="img_container"><img src="img/media/${m.images[0].path}" alt="${m.name}"></div>
      <div class="info_container">
        <h3>${m.name.replace(/ /g, '&thinsp;')}</h3>
        <p class="description">${m.description}</p>
        <p><b>Length:</b> ${m.totalLengthMinutes} minutes</p>
        <p><b>Release date:</b> ${m.firstAired}</p>
      </div>
    `;
  }
  document.getElementById('popup_content').innerHTML = outp;
  
  document.getElementById('popup').style.display = 'block';

  document.getElementById('popup_background').style.animation = 'fadeIn 0.4s ease-in-out forwards 1';
  
  document.getElementById('popup_content').style.animation = 'popUp 0.4s ease-in-out forwards 1';
}

function closePopUp() {
  document.getElementById('popup_content').innerHTML = '';
  document.getElementById('popup').style.display = 'none';
}

for (let i = 0; i < mediaArr.length; i++) {
  mediaArr[i].characters = charactersArr.filter(character => character.media.includes(mediaArr[i]));
}
