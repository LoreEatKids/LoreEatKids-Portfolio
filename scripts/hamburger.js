const redPageEl = document.querySelector(".red");
const pagesContainerEl = document.querySelector(".container");
const hamburgerEl = document.querySelector(".hamburger");
const hamburgerContainerEl = document.querySelector(".hamburger-container");
const hamburgerElLines = document.querySelectorAll(".hamburger span");
const redPageLinksEls = document.querySelectorAll(".red_container ul li a");

hamburgerEl.addEventListener("click", () => {
    hamburgerElLines.forEach(span => span.classList.toggle("active"));

    pagesContainerEl.classList.toggle("menuIsActive")
    redPageEl.classList.toggle("active");

    navbar.classList.toggle("active");
})

const changeUrl = el => location.href = el.href

redPageLinksEls.forEach(el => {
    el.addEventListener("click", () => {
        redPageEl.classList.remove("active");
        pagesContainerEl.classList.remove("menuIsActive");

        redPageEl.addEventListener("animationend", changeUrl.bind(el));
    })
})