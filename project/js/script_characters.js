/// <reference path="data/ships.js" />
/// <reference path="data/media.js" />
/// <reference path="data/characters.js" />

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
    (filter_species === 'all' || c.species.includes(filter_species) || (c.species[0] !== 'Human' && c.species[0] !== 'Vulcan' && c.species[0] !== 'Klingon' && filter_species === 'other')) &&
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
    outp += `<p id="none_found">No matching characters found</p>`;
  }
  for (let i = 0; i < charactersArrFiltered.length; i++) {
    let c = charactersArrFiltered[i];
    outp += `
      <div class="character" onclick="popUp(this, ${i})">
        <div class="img_container"><img src="img/characters/${c.images[0].path}" alt="${c.lastName === '' ? c.firstNames : c.lastName} in ${c.images[0].year}"></div>
        <h3>${c.name}</h3>
        <p class="description">${c.description}</p>
        <p><b>Species:</b> ${getSpecies(c)}</p>
        <p><b>Sex:</b> ${c.sex}</p>
        ${c.rank === null ? '' : `<p><b>Rank:</b> ${c.rank}</p>`}
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

function resetSearch() {
  let filter_species = document.getElementById('filter_species');
  let filter_sex = document.getElementById('filter_sex');
  let search = document.getElementById('search');

  if (filter_species.value !== 'all' || filter_sex.value !== 'all' || search.value !== '') {
    filter_species.value = 'all';
    filter_sex.value = 'all';
    search.value = '';
    load();
  }
}

let currentChar = charactersArr[0];

function popUp(elem, n) {
  let outp = '';

  currentChar = charactersArr.filter(c => checkFilter(c))[n];
  let c = currentChar;
  outp += `
    <div class="img_container">
      <img id="characterImg" src="img/characters/${c.images[0].path}" alt="">
      <div id="characterImgCaption" class="img_caption">
        <a id="img_link" href="media.html?selected=${c.images[0].media.abbreviation}">${c.images[0].media === media.TC ? media.TOS.abbreviation : c.images[0].media.abbreviation}</a>
        <p>${c.lastName === '' ? c.firstNames : c.lastName} in ${c.images[0].year}</p>
      </div>
      ${
        c.images.length > 1 ? `
          <div class="btn_image" id="btn_left" onclick="cycleLeft()">&#x1f890;</div>
          <div class="btn_image" id="btn_right" onclick="cycleRight()">&#x1f892;</div>
        ` : ''
      }
    </div>
    <div class="info_container">
      <h3>${c.name.replace(/ /g, '&thinsp;')}</h3>
      <p class="description">${c.description}</p>
      <p><b>Species:</b> ${getSpecies(c)}</p>
      <p><b>Sex:</b> ${c.sex}</p>
      ${c.rank === null ? '' : `<p><b>Rank:</b> ${c.rank}</p>`}
      <p><b>Occupation:</b> ${c.occupation}</p>
      <p><b>Home planet:</b> ${c.homePlanet}</p>
      <p><b>First appearance:</b> <a href="media.html?selected=${c.images[index].media.abbreviation}">${extractTitle(c.images[index].media === media.TC ? media.TOS.name : c.images[index].media.name)}</a></p>
      <p><b>Actor${c.actors.length === 1 ? '' : 's'}:</b> ${getActors(c)}</p>
    </div>
  `;
  document.getElementById('popup_content').innerHTML = outp;
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popup_background').style.animation = 'fadeIn 0.4s ease-in-out forwards 1';
  document.getElementById('popup_content').style.animation = 'popUp 0.4s ease-in-out forwards 1';

  sources = [];
  captions = [];
  for (let i=0; i<c.images.length; i++) {
    sources.push(c.images[i].path);
    captions.push(`${c.lastName === '' ? c.firstNames : c.lastName} in ${c.images[i].year}`);
  }
  index = 0;
  // clearInterval(interval);
  // interval = setInterval(cycleRight, time);
}

function closePopUp() {
  document.getElementById('popup_content').innerHTML = '';
  document.getElementById('popup').style.display = 'none';

  sources = [];
  captions = [];
  index = 0;
  // clearInterval(interval);
}

function extractTitle(str) {
  let colonIndex = str.indexOf(':');
  if (colonIndex !== -1) {
    str = str.substring(colonIndex + 1).trim();
  }
  return str.replace(/^(star trek\s*)/i, '');
}

let time = 4000;
let sources = [];
let captions = [];
// let interval = setInterval(()=>{}, time);
let index = 0;

function cycleLeft() {
  let c = currentChar;
  index += sources.length - 1;
  index %= sources.length;
  document.getElementById('characterImg').src = `img/characters/${sources[index]}`;
  document.getElementById('characterImgCaption').innerHTML = `
    <a id="img_link" href="media.html?selected=${c.images[index].media.abbreviation}">${c.images[index].media.abbreviation === media.TC ? media.TOS.abbreviation : c.images[index].media.abbreviation}</a>
    <p>${captions[index]}</p>
  `;
  // clearInterval(interval);
  // interval = setInterval(cycleLeft, time);
}
function cycleRight() {
  let c = currentChar;
  index++;
  index %= sources.length;
  document.getElementById('characterImg').src = `img/characters/${sources[index]}`;
  document.getElementById('characterImgCaption').innerHTML = `
    <a id="img_link" href="media.html?selected=${c.images[index].media.abbreviation}">${c.images[index].media === media.TC ? media.TOS.abbreviation : c.images[index].media.abbreviation}</a>
    <p>${captions[index]}</p>
  `;
  // clearInterval(interval);
  // interval = setInterval(cycleRight, time);
}

document.addEventListener('keyup', (key) => {
  if (key.code === 'ArrowLeft') cycleLeft();
  else if (key.code === 'ArrowRight') cycleRight();
  else if (key.code === 'Escape') closePopUp();
});
