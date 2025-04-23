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
  let filter_species = document.getElementById('filter_species').value;
  let filter_sex = document.getElementById('filter_sex').value;
  let search = document.getElementById('search').value.toLowerCase();
  return (
    (filter_species === 'all' || c.species.includes(filter_species)) &&
    (filter_sex === 'all' || c.sex === filter_sex) &&
    (
      (c.name.toLowerCase().includes(search)) ||
      (c.firstNames.toLowerCase().includes(search)) ||
      (c.lastName.toLowerCase().includes(search)) ||
      (c.altNames.filter(str => str.includes(search)).length > 0)
    )
  );
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

  let charactersArrFiltered = charactersArr.filter(c => checkFilter(c));

  if (charactersArrFiltered.length === 0) {
    outp += `<p id="no_characters">No characters found</p>`;
  }
  for (let i = 0; i < charactersArrFiltered.length; i++) {
    let c = charactersArrFiltered[i];
    outp += `
      <div class="character">
        <div class="img_container"><img src="img/characters/${c.images[0].path}" alt="${c.name} in ${c.images[0].year}"></div>
        <h3>${c.name}</h3>
        <p class="description">${c.description}</p>
        <p><b>Sex:</b> ${c.sex}</p>
        <p><b>Occupation:</b> ${c.occupation}</p>
        <p><b>Home planet:</b> ${c.homePlanet}</p>
        <p><b>Species:</b> ${getSpecies(c)}</p>
        <p><b>Actor${c.actors.length === 1 ? '' : 's'}:</b> ${getActors(c)}</p>
      </div>
    `;
  }
  document.getElementById('characters_container').innerHTML = outp;
  
  for (let i = 0; i < charactersArrFiltered.length; i++) {
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
