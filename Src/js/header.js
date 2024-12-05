// Fetch and display header
document.addEventListener("DOMContentLoaded", async function () {
  await loadHeader();
  scrollEvent();
});
async function loadHeader() {
  try {
    const response = await fetch("/Src/components/header.html");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const header = doc.querySelector("#header-wrapper");
    document.querySelector("#header").innerHTML = header.innerHTML;
  } catch (err) {
    console.error("Kunne ikke hente headeren", err);
  }
}
// Header box-shadow on scroll
function scrollEvent() {
  const header = document.getElementById("header");
  if (!header) {
    console.warn("Navbar element ikke fundet!");
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
