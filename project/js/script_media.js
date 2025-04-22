/// <reference path="ships.js" />
/// <reference path="media.js" />
/// <reference path="characters.js" />

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
      start: '-260% 80%'
    }
  });
}

function checkFilter(m) {
  let filter = document.getElementById('filter').value;
  return filter === 'all' || m.type === filter;
}

function load() {
  let outp = '';
  for (let i = 0; i < mediaArr.length; i++) {
    let m = mediaArr[i];
    if (checkFilter(m)) {
      if (m.type === 'series') {
        outp += `
          <div class="mediaElement">
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
          <div class="mediaElement">
            <div class="img_container"><img src="img/media/${m.images[0].path}" alt="${m.name}"></div>
            <h3>${m.name}</h3>
            <p class="description">${m.description}</p>
            <p><b>Length:</b> ${m.totalLengthMinutes} minutes</p>
            <p><b>Release date:</b> ${m.firstAired}</p>
          </div>
        `;
      }
    }
  }
  document.getElementById('media_container').innerHTML = outp;
  
  for (let i = 0; i < mediaArr.length; i++) {
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
