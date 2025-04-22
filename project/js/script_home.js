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

setAnimation(document.querySelector('#explore_characters > div'), '-100vw', 1);
setAnimation(document.querySelector('#explore_media > div'), '-100vw', 1);

console.log('script_home.js loaded');
