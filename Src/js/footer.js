// Fetch and display footer
document.addEventListener("DOMContentLoaded", () => {
  loadFooter();
});
async function loadFooter() {
  try {
    const response = await fetch("/Src/components/footer.html");
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const footer = doc.querySelector("#footerElements");
    document.querySelector("#footer").innerHTML = footer.innerHTML;
  } catch (err) {
    console.error("Kunne ikke hente footeren", err);
  }
}
