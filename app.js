import { pictureArray } from "./data/pictures.js";

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", (event) => {
  window.searchPictures(searchInput.value);
});

// Why not automatic search?
searchInput.addEventListener("input", (event) => {
  window.searchPictures(searchInput.value);
});

// * If you ask me, this function should be in pictures.js, not here.
function displayPictures(pictureArray) {
  const cardsContainer = document.getElementById("cards-container");

  let html = "";
  pictureArray.forEach((picture) => {
    html += `
    <div class="card">
      <img src="${picture.imgUrl}" alt="${picture.title}" />
      <h3>${picture.title}</h3>
      <p>${picture.artist}</p>
      <h4>$${picture.value}</h4>
      <span class="stock-status ${picture.isInStock ? "d-none" : ""}">Not available</span>
    </div>
    `;
  });

  cardsContainer.innerHTML = html;
}

// * And so should this one. Although I'm not a fan of adding functions to window or the prototype chain.
window.searchPictures = (searchString) => {
  let filteredPictureArr = pictureArray.filter((picture) =>
    picture.title.toLowerCase().includes(searchString.toLowerCase())
  );

  displayPictures(filteredPictureArr);
};

// Generate picture array
displayPictures(pictureArray);
