/* Home */

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navUl = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    navUl.classList.toggle("show");
    hamburger.textContent = hamburger.textContent === "✖" ? "☰" : "✖";
  });
});

const apiKey = "b5248c0ebae29de3071342e0b45050d2";
const lat = "-34.1278";
const lon = "18.4495";
const units = "metric";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

async function fetchWeather() {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    document.getElementById("current-temperature").textContent = `${Math.round(
      data.main.temp
    )}°C`;
    document.getElementById("current-description").textContent =
      data.weather[0].description;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    const data = await response.json();

    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      const forecast = data.list[i * 8];
      const date = new Date(forecast.dt_txt).toLocaleDateString();
      const temp = `${Math.round(forecast.main.temp)}°C`;
      const description = forecast.weather[0].description;

      forecastContainer.innerHTML += `<p>${date}: ${temp}, ${description}</p>`;
    }
  } catch (error) {
    console.error("Error fetching forecast data:", error);
  }
}

fetchWeather();
fetchForecast();

const membersUrl = "data/members.json";
const spotlightContainer1 = document.querySelector(".spotlight1");
const spotlightContainer2 = document.querySelector(".spotlight2");
const spotlightContainer3 = document.querySelector(".spotlight3");

async function loadMembers() {
  const response = await fetch(membersUrl);
  const data = await response.json();

  const qualifiedMembers = data.members.filter(
    (member) =>
      member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
  );

  shuffleArray(qualifiedMembers);

  const spotlights = qualifiedMembers.slice(0, 3);

  displaySpotlights(spotlights);
}

function displaySpotlights(spotlights) {
  spotlights.forEach((spotlight, index) => {
    const spotlightDiv = document.querySelector(`.spotlight${index + 1}`);

    spotlightDiv.innerHTML = `
      <h3>${spotlight.name}</h3>
      <img src="${spotlight.image}" alt="${spotlight.name}" />
      <p>${spotlight.description}</p>
      <a href="${spotlight.website}" target="_blank">Visit Website</a>
    `;
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

loadMembers();

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("meet-greet-banner");
  const closeBannerButton = document.getElementById("close-banner");

  const today = new Date().getDay();

  if (today >= 1 && today <= 3) {
    banner.classList.remove("hidden");
  }

  closeBannerButton.addEventListener("click", function () {
    banner.classList.add("hidden");
  });
});

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
      visitMessage.textContent = "You last visited ${daysDiff} days ago.";
    }
  }

  localStorage.setItem("lastVisit", currentVisit);
});

/* Join */

document.getElementById("timestamp").value = new Date().toISOString();
