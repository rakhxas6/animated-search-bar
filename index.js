const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");
const clickEl = document.querySelector(".click");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
  // clickEl.remove();
});
