const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const lat = 49.7499;
const lon = 6.6371;

const apiKey = "b5248c0ebae29de3071342e0b45050d2";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(1)}`;

  const iconSrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}

apiFetch();
