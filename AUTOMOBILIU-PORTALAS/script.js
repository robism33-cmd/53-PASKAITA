const carForm = document.getElementById("carForm");
const carDiv = document.getElementById("div");

carForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;
  const fuel = document.getElementById("fuel").value;
  const carCard = document.createElement("div");
  carCard.classList.add("car-card");
  carCard.innerHTML = `
    <h3>${name}</h3>
    <p>${description}</p>
    <p>Price: $${price}</p>
    <p>Fuel Type: ${fuel}</p>
    <img src="${image}" alt="${name}" width="200"/>
  `;
  carList.appendChild(carCard);
});
