const body = document.body;
const nav = document.querySelector("header");
const main = document.querySelector("body");
let navtoggler = document.getElementById("active");
let checkedornot = navtoggler.checked;

//Scroll Mechanism
const headerHeight = document.querySelector("header").offsetHeight;
main.style.top = headerHeight + "px";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  if (currentScroll - lastScroll > 0) {
    let checkedornot = navtoggler.checked;
    if (checkedornot == false) {
      nav.classList.add("scroll-down");
    }
  } else {
    nav.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
})

