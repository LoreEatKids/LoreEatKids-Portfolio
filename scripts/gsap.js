gsap.registerPlugin(ScrollTrigger);
const columns = document.querySelectorAll(".column");

gsap.from(".projects-wrapper", {
  scrollTrigger: {
      scroller: ".container",
      trigger: ".projects-wrapper",
      toggleActions: "restart none none none",
    },
  y: 100,
  duration: 1,
});


gsap.from(".menu", {opacity: 0, duration: 0.8, delay: 2, x: -100}); // menu
gsap.from(".buzz", {scale: 2, duration: 1, stagger: 0.6}); // order: buzz img , big title, name
gsap.from(".infos__title", {duration: 1, delay: 1.1, backgroundPosition: "200px 0px", opacity: 0});
gsap.from(".infos__title-desc", {duration: 1, y: 30, opacity: 0, delay: 1.4});
gsap.from(".main-title", {opacity: 0, duration: .8, delay: 2.5, y: 100});
columns.forEach((column, i) => {
    gsap.from(column, {opacity: 0, duration: .8, delay: 3 + i});
});