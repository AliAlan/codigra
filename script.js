const open = document.querySelector(".hamburger img");
const close = document.querySelector(".close img");
const mobileNav = document.querySelector(".mobile-nav");
const buy = document.querySelector(".buy");
const buy2 = document.querySelector(".buy-2");
const codigra = document.querySelector(".img-1 h2");
const ocean = document.querySelector(".img-2 h2");
const darkMode = document.querySelector(".dark-mode img");
const topic = document.querySelector(".topic");
open.addEventListener("click", () => {
  mobileNav.style.clipPath = "polygon(100% 0, 0 0, 0 100%, 100% 100%)";
  mobileNav.style.transition = "1.5s ease";
  console.log("opened");
});

close.addEventListener("click", () => {
  mobileNav.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
  console.log("closed");
});
buy2.addEventListener("mouseover", () => {
  ocean.style.letterSpacing = "2px";
});
buy2.addEventListener("mouseleave", () => {
  ocean.style.letterSpacing = "unset";
});
darkMode.addEventListener("click", () => {});
