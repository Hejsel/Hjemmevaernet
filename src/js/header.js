// Fetch and display header
document.addEventListener("DOMContentLoaded", async function () {
  await loadHeader();
  scrollEvent();
  setupMenuListeners();
});
async function loadHeader() {
  try {
    const response = await fetch("/src/components/header.html");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const header = doc.querySelector("#headerElements");
    document.querySelector("#header").innerHTML = header.innerHTML;
  } catch (err) {
    console.error("Kunne ikke hente headeren", err);
  }
}
// Header box-shadow on scroll
function scrollEvent() {
  const header = document.getElementById("header__container");
  if (!header) {
    console.warn("Header element ikke fundet!");
    return;
  }
  document.addEventListener("scroll", () => {
    if (scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Burger menu functionality
function setupMenuListeners() {
  const mobileMenu = document.querySelector("#mobileMenu");
  const mobileMenuOpenBtn = document.querySelector("#mobileMenuOpenBtn");
  const mobileMenuCloseBtn = document.querySelector("#mobileMenuCloseBtn");
  console.log(mobileMenu, mobileMenuCloseBtn, mobileMenuOpenBtn);
  if (!mobileMenu || !mobileMenuOpenBtn || !mobileMenuCloseBtn) {
    console.warn("HTML elementer blev ikke fundet");
    return;
  }
  if (!mobileMenuOpenBtn.hasAttribute("data-listener")) {
    mobileMenuOpenBtn.addEventListener("click", () => {
      mobileMenu.classList.add("open");
    });
    mobileMenuOpenBtn.setAttribute("data-listener", true);
  }
  if (!mobileMenuCloseBtn.hasAttribute("data-listener")) {
    mobileMenuCloseBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  }
  mobileMenuCloseBtn.setAttribute("data-listener", true);
}
