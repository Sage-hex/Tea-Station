// setup date

const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// setting up the nav

const navBtn = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");
const navClose = document.querySelector("#nav-close");

// Or getting by IDS below

// const navBtn = document.getElementById("nav-btn");
// const navbar = document.getElementById("navbar");
// const navClose = document.getElementById("nav-close");

// showing the navbar

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

// closing the navBar

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
