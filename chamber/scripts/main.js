document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});

document.getElementById("lastModified").textContent = document.lastModified;
