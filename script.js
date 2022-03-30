const inputField = document.querySelector(".new-list-item");
const inputButton = document.querySelector(".receive-item");
const unorderedList = document.querySelector(".unordered-list");
const listSection = Array.from(document.querySelectorAll(".list"));

console.dir(listSection);

inputButton.addEventListener("click", (e) => {
  let listCategory = document.querySelector("#category").value;
  let selectedHTML = document.querySelector(`div.list.${listCategory} ul`);
  console.log(selectedHTML);
  let toBeInserted = `<li>${inputField.value}</li>`;
  selectedHTML.insertAdjacentHTML("beforeend", toBeInserted);
  inputField.value = "";
});

listSection.forEach((list) => {
  list.addEventListener("click", (e) => {
    setTimeout(() => {
      e.target.remove();
    }, 1000);
    e.target.style.textDecoration = "line-through";
    //   console.log(e.target.textContent);
  });
});
