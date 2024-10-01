const currentYear = new Date().getFullYear();
document.getElementById("copyrightYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById(
  "lastModified"
).textContent = `Last Modified: ${lastModified}`;

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.textContent = hamburger.textContent === "✖" ? "☰" : "✖";
});

const darkModeToggle = document.getElementById("darkModeToggle");
const mainElement = document.querySelector("main");

darkModeToggle.addEventListener("click", () => {
  mainElement.classList.toggle("dark-mode");

  if (darkModeToggle.textContent === "🌙 Dark Mode") {
    darkModeToggle.textContent = "☀️ Light Mode";
  } else {
    darkModeToggle.textContent = "🌙 Dark Mode";
  }
});

const visitCount = localStorage.getItem("visitCount");
let count = visitCount ? parseInt(visitCount) + 1 : 1;
localStorage.setItem("visitCount", count);

document.querySelector(".card2").innerHTML += `<p>Page Visits: ${count}</p>`;
