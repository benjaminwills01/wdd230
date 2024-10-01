document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navUl = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    navUl.classList.toggle("show");
    hamburger.textContent = hamburger.textContent === "✖" ? "☰" : "✖";
  });
});

document.getElementById("lastModified").textContent = document.lastModified;

/* Discover */

document.addEventListener("DOMContentLoaded", () => {
  const visitMessage = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const currentVisit = new Date().getTime();

  if (!lastVisit) {
    visitMessage.textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const timeDiff = currentVisit - lastVisit;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
      visitMessage.textContent = "You last visited 1 day ago.";
    } else {
      visitMessage.textContent = `You last visited ${daysDiff} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", currentVisit);
});
