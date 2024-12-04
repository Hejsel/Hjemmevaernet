// Dynamisk inkludering af header
document.addEventListener("DOMContentLoaded", () => {
  fetch("headerTest/header.html") // Sørg for, at stien matcher projektets struktur
    .then((response) => {
      if (!response.ok) {
        throw new Error("Kunne ikke hente header.html");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // Når headeren er indlæst, kaldes funktionen for at tilføje interaktivitet
      initializeHeader();
    })
    .catch((error) => {
      console.error("Fejl ved indlæsning af header:", error);
    });
});
