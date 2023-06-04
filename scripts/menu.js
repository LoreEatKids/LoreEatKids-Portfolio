const navbar = document.querySelector(".menu");
const bluePage = document.querySelector(".blue");
const whitePage = document.querySelector(".white");
const redPage = document.querySelector(".red");

const titleDefault = document.querySelector(".menu_top_title");
const titleSecondary = document.querySelector(".menu_title_active");

const menuAboutItems = document.querySelectorAll(".menu_about li");

const myWorksEl = document.querySelector(".menu__works");

const animation = {
  handleMenuTop() {
    titleDefault.classList.remove("title-t");
    titleSecondary.classList.remove("title-t2");
    menuAboutItems.forEach((li) => (li.style.left = "-100px"));
    titleDefault.style.left = "-300px";
    titleSecondary.style.left = "5px";
    myWorksEl.style.left = "-200px";
  },
    
  handleRemoveMenuTop() {
    titleSecondary.classList.add("title-t2");
    titleDefault.classList.add("title-t");
    menuAboutItems.forEach((li) => (li.style.left = 0));
    titleDefault.style.left = "0";
    titleSecondary.style.left = "-50px";
    myWorksEl.style.left = "0";
  },

  handleHamburger() {
    hamburgerContainerEl.style.left = "0";
  },

  handleRemoveHamburger() {
    hamburgerContainerEl.style.left = "-200px";
  }
};

const navObserver = new IntersectionObserver( (entries, observer) => {
    const entry = entries[0];
    
    if (!entry.isIntersecting) { // intersecting
      navbar.classList.add("active");
      animation.handleMenuTop();
      animation.handleHamburger();
    } else {                     // not intersecting
      navbar.classList.remove("active");
      animation.handleRemoveMenuTop();  
      animation.handleRemoveHamburger();      
    }
  }, { threshold: 0.3, }
);
navObserver.observe(bluePage);