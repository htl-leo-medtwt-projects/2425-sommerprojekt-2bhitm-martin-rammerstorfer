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
      start: '10% 80%'
    }
  });
}

function setAnimationEnterprise(elem, startX, startY, duration) {
  gsap.set(elem, {
    x: startX,
    y: startY
  });
  gsap.to(elem, {
    x: 0,
    y: 0,
    duration: duration,
    ease: "linear",
    scrollTrigger: {
      trigger: elem,
      start: '160% 80%'
    }
  });
}
setAnimationEnterprise(document.querySelector('#enterprise'), '-180vw', '-40vh', 4);

function setAnimationPlanet(elem, startX, startY, duration) {
  gsap.set(elem, {
    x: startX,
    y: startY
  });
  gsap.to(elem, {
    x: 0,
    y: 0,
    duration: duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,
      start: '50% 80%'
    }
  });
}
setAnimationPlanet(document.querySelector('#planet'), '20vw', '0', 1);

function setAnimationPlanet2(elem, startX, startY, duration) {
  gsap.set(elem, {
    x: startX,
    y: startY
  });
  gsap.to(elem, {
    x: 0,
    y: 0,
    duration: duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,
      start: '160% 80%'
    }
  });
}
setAnimationPlanet2(document.querySelector('#planet2'), '-20vw', '0', 0.8);

setAnimation(document.querySelector('#explore_media > div'), '-100vw', 1);
setAnimation(document.querySelector('#explore_characters > div'), '100vw', 1);
