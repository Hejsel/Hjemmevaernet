//GAMMEL
/*
function initializeHeader() {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      burgerMenu.classList.toggle("open"); // Tilføjer/fjerner 'open' for animation
    });
  }
}
  */

function initializeHeader() {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("open");
    navLinks.classList.toggle("active");
  });
}

// initializeHeader();

// function initializeHeader() {
//   const burgerMenu = document.querySelector(".burger-menu");
//   const navLinks = document.querySelector(".nav-links");

//   burgerMenu.addEventListener("click", () => {
//     burgerMenu.classList.toggle("open"); // Åbn/klik animation for burger-menuen
//     navLinks.classList.toggle("active"); // Vis navigation
//   });
// }

// // Kør funktionen, når DOM er klar
// document.addEventListener("DOMContentLoaded", initializeHeader);
