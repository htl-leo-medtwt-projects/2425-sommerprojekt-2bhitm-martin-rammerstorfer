/// <reference path="ships.js" />
/// <reference path="media.js" />
/// <reference path="characters.js" />

gsap.registerPlugin(ScrollTrigger);
function setAnimation(elem, startX, duration) {
  gsap.set(elem, {
    x: startX
  });
  gsap.to(elem, {
    x: 0,
    duration: duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,
      start: '25% 80%'
    }
  });
}

function checkFilter(c) {
  let filter = document.getElementById('filter').value;
  let filter2 = document.getElementById('filter2').value;
  let filter3 = document.getElementById('search').value;
  return (filter === 'all' || c.species.includes(filter)) && (filter2 === 'all' || c.gender === filter2) && (c.name.toLowerCase().includes(filter3.toLowerCase()) || (c.firstNames.toLowerCase().includes(filter3.toLowerCase())));
}

function getActors(c) {
  let outp = '';
  for (let j = 0; j < c.actors.length; j++) {
    if (j > 0) {
      outp += ', ';
    }
    outp += c.actors[j];
  }
  return outp;
}

function getSpecies(c) {
  if (!c.species || c.species.length === 0) {
    return "";
  } else if (c.species.length === 1) {
    return c.species[0];
  } else {
    return `half ${c.species[0]}, half ${c.species[1]}`;
  }
}

function getShips(c) {
  let outp = '';
  for (let j = 0; j < c.ships.length; j++) {
    if (j > 0) {
      outp += ', ';
    }
    outp += c.ships[j].name;
  }
  return outp;
}

function load() {
  let outp = '';
  let noneFound = true;
  for (let i = 0; i < charactersArr.length; i++) {
    let c = charactersArr[i];
    if (checkFilter(c)) {
      outp += `
        <div class="character">
          <div class="img_container"><img src="img/characters/${c.images[0].path}" alt="${c.name} in ${c.images[0].year}"></div>
          <h3>${c.name}</h3>
          <p class="description">${c.description}</p>
          <p><b>Gender:</b> ${c.gender}</p>
          <p><b>Occupation:</b> ${c.occupation}</p>
          <p><b>Home planet:</b> ${c.homePlanet}</p>
          <p><b>Species:</b> ${getSpecies(c)}</p>
          <p><b>Actor${c.actors.length === 1 ? '' : 's'}:</b> ${getActors(c)}</p>
        </div>
      `;
      noneFound = false;
    }
  }
  if (noneFound) {
    outp += `<p id="no_characters">No characters found</p>`;
  }
  document.getElementById('characters_container').innerHTML = outp;
  
  for (let i = 0; i < charactersArr.length; i++) {
    let elem = document.getElementsByClassName('character')[i];
    switch (i % 3) {
      case 0:
        setAnimation(elem, '140vw', 0.6);
        break;
      case 1:
        setAnimation(elem, '120vw', 0.8);
        break;
      case 2:
        setAnimation(elem, '100vw', 1);
        break;
    }
  }
}
load();

document.getElementById('search').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    load();
  }
});
