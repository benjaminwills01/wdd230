const baseURL = "https://benjaminwills01.github.io/wdd230/";
const linksURL = "https://benjaminwills01.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const linkList = document.querySelector(".learning-activities");

  weeks.forEach((week) => {
    let listItem = document.createElement("li");
    let weekTitle = `${week.week}: `;

    weekTitle += week.links
      .map((link) => {
        return `<a href="${baseURL + link.url}">${link.title}</a>`;
      })
      .join(" | ");

    listItem.innerHTML = weekTitle;
    linkList.appendChild(listItem);
  });
}

getLinks();
