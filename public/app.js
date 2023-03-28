const searchContainer = document.querySelector(".search-container");
const autoCompleteContainer = document.querySelector(
  ".auto-complete-container"
);
const searchInputElement = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const bodyElement = document.querySelector("body");

bodyElement.addEventListener("click", hideSearch);

autoCompleteContainer.addEventListener("mouseover", showSearch);
searchContainer.addEventListener("mouseover", showSearch);

autoCompleteContainer.addEventListener("onfocus", showSearch);

autoCompleteContainer.addEventListener("mouseleave", hideSearch);
searchContainer.addEventListener("mouseleave", hideSearch);

searchInputElement.addEventListener("input", hideSearch);
searchInputElement.addEventListener("focus", showSearch);

/// MAZODA IS BIATCH

function showSearch() {
  console.log("input");
  searchInputElement.style.width = "100%";
  searchInputElement.style.height = "100%";
  searchContainer.style.width = "100%";
  searchContainer.style.justifyContent = "end";
  searchContainer.style.borderRadius = "1rem 1rem 0rem 0rem";
  searchIcon.style.color = "white";
  searchIcon.style.backgroundColor = "#07051a";
  autoCompleteContainer.style.opacity = "1";
  autoCompleteContainer.style.width = "100%";
  autoCompleteContainer.style.padding = "1rem";
}

function hideSearch() {
  console.log(document.activeElement);
  if (
    searchInputElement.value == "" &&
    document.activeElement != searchInputElement
  ) {
    searchInputElement.style.width = "0";
    searchInputElement.style.height = "0";
    searchContainer.style.width = "1rem";
    searchContainer.style.justifyContent = "center";
    searchContainer.style.borderRadius = "2rem";
    searchIcon.style.color = "#07051a";
    searchIcon.style.backgroundColor = "white";
    autoCompleteContainer.style.opacity = "0";
    autoCompleteContainer.style.width = "1rem";
    autoCompleteContainer.style.padding = "1rem";
  }
}
