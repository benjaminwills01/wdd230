const url = "data/members.json";
const container = document.querySelector("#directory-container");

async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();

  displayMembers(data.members);
}

function displayMembers(members) {
  container.innerHTML = "";

  members.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.classList.add("member-card");

    const logo = document.createElement("img");
    logo.src = member.image;
    logo.alt = `${member.name} logo`;
    logo.classList.add("member-logo");

    const name = document.createElement("h2");
    name.textContent = member.name;

    const address = document.createElement("p");
    address.textContent = member.address;

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${member.phone}`;

    const website = document.createElement("a");
    website.href = member.website;
    website.textContent = "Visit Website";
    website.target = "_blank";

    const description = document.createElement("p");
    description.textContent = member.description;

    memberCard.appendChild(logo);
    memberCard.appendChild(name);
    memberCard.appendChild(address);
    memberCard.appendChild(phone);
    memberCard.appendChild(website);
    memberCard.appendChild(description);

    container.appendChild(memberCard);
  });
}

document.getElementById("grid-view").addEventListener("click", () => {
  container.classList.add("grid-view");
  container.classList.remove("list-view");
});

document.getElementById("list-view").addEventListener("click", () => {
  container.classList.add("list-view");
  container.classList.remove("grid-view");
});

getMembersData();
