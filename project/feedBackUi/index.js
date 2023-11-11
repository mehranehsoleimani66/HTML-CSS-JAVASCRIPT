const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRate = "";

ratingEls.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    removeActive();
    selectedRate = e.target.innerText || e.target.parentNode.innerText;
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRate !== "") {
    containerEl.innerHTML = `
    <strong>thank you !</strong>
    <br>
    <br>
    <strong>your feedback:${selectedRate}</strong>
    <p> We'll use your feedback to improve our customer support.</p>`;
  }
});

function removeActive() {
  ratingEls.forEach((rating) => {
    rating.classList.remove("active");
  });
}
