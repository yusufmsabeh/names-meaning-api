const searchInput = document.querySelector("input");
const body = document.querySelector("body");
const nameList = document.createElement("ul");
const autoCompleteContainerHandel = document.querySelector(
  ".auto-complete-container"
);
const main = document.querySelector("main");

const nameDesc = document.createElement("div");
nameDesc.classList.add("result");
const nameRequest = (query) => {
  const url = `/auto-complete?q=${query}`;
  myFetch(url, (response) => {
    nameList.classList.add("links");
    nameList.textContent = "";
    nameDesc.textContent = "";
    nameDesc.remove();
    response.names.forEach((ele) => {
      const nameItem = document.createElement("li");
      const nameLink = document.createElement("a");
      nameLink.className = "link";
      nameLink.textContent = ele;
      nameItem.append(nameLink);
      nameLink.setAttribute("href", "#");
      nameList.append(nameItem);
      autoCompleteContainerHandel.append(nameList);

      nameLink.addEventListener("click", () => {
        myFetch(`/get-meaning?name=${nameLink.textContent}`, (data) =>
          showMeaning(data, nameLink.textContent)
        );
      });
    });
  });
};
const showMeaning = (data, name) => {
  const par = document.createElement("p");
  par.textContent = data.name;
  nameDesc.textContent = "";
  nameDesc.append(par);
  main.append(nameDesc);
};
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() == "") {
    nameList.innerHTML = "";
  } else {
    nameRequest(searchInput.value);
  }
});

document.addEventListener("click", (ele) => {
  if (ele.target.classList.contains("link")) {
    console.log(ele.target.textContent);
    searchInput.value = ele.target.textContent;
  }
});
