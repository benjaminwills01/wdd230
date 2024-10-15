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

const apiKey = "b5248c0ebae29de3071342e0b45050d2";
const city = "Johannesburg";
const countryCode = "ZA";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${apiKey}`;

async function fetchWeatherData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Weather data not available");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

async function updateWeatherInfo() {
  const weatherInfoContainer = document.getElementById("weather-info");
  const data = await fetchWeatherData();
  if (data) {
    const { main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    const icon = weather[0].icon;

    weatherInfoContainer.innerHTML = `
      <p><img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon"> ${temperature}°C - ${description}</p>
    `;
  } else {
    weatherInfoContainer.innerHTML =
      "<p>Weather information currently unavailable.</p>";
  }
}

window.addEventListener("load", updateWeatherInfo);

fetch("data/links.json")
  .then((response) => response.json())
  .then((data) => {
    const weeks = data.weeks;
    const ulElement = document.querySelector("#learning-activities");

    weeks.forEach((week) => {
      const liElement = document.createElement("li");
      const weekText = document.createTextNode(`${week.week}: `);
      liElement.appendChild(weekText);

      week.links.forEach((link, index) => {
        const aElement = document.createElement("a");
        aElement.href = link.url;
        aElement.textContent = link.title;

        liElement.appendChild(aElement);

        if (index < week.links.length - 1) {
          const pipe = document.createTextNode(" | ");
          liElement.appendChild(pipe);
        }
      });

      ulElement.appendChild(liElement);
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));
