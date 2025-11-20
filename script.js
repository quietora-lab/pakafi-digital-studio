// Menu mobile
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Année dynamique dans le footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
