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

const changeUrl = el => {
    const href = el.href;
    const hfefRaw = el.getAttribute("href").slice(1);
    
    location.href = href;

    if(hfefRaw === "works" || "aboutme") navbar.classList.add("active");
    else navbar.classList.remove("active")
}

redPageLinksEls.forEach(el => {
    el.addEventListener("click", () => {
        hamburgerElLines.forEach(span => span.classList.remove("active"));
        pagesContainerEl.classList.remove("menuIsActive");
        redPageEl.classList.remove("active");
        changeUrl(el);
    })
})