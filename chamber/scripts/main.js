document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navUl = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    navUl.classList.toggle("show");
    hamburger.textContent = hamburger.textContent === "✖" ? "☰" : "✖";
  });
});

document.getElementById("lastModified").textContent = document.lastModified;
