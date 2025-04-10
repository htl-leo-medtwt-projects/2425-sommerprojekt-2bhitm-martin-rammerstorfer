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
      start: '50% 80%'
    }
  });
}
