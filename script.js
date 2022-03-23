const open = document.querySelector(".hamburger img");
const close = document.querySelector(".close img");
const mobileNav = document.querySelector(".mobile-nav");
const buy = document.querySelector(".buy");
const buy2 = document.querySelector(".buy-2");
const codigra = document.querySelector(".img-1 h2");
const ocean = document.querySelector(".img-2 h2");
const darkMode = document.querySelector(".dark-mode img");
const lightMode = document.querySelector(".light-mode img");
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
$(document).ready(function () {
  var counter = 0;
  var c = 0;
  var i = setInterval(function () {
    $(".loading-page .counter h1").html(c);

    //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

    /*
    $(".loading-page .counter h1.color").css("width", c + "%");
    */
    counter++;
    c++;

    if (counter == 101) {
      clearInterval(i);
    }
  }, 20);
});

window.addEventListener("load", () => {
  const loading = document.querySelector(".loading-page");

  setTimeout(function () {
    loading.classList.add("preload-finish");
  }, 2000);
});
