const formAdd = document.querySelector(".add_todo");
const inputAdd = document.querySelector(".input_add");
const ul = document.querySelector(".todos_container");
const todoSearch = document.querySelector(".form_search input");

formAdd.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemAdd = event.target.add.value.trim();
  if (itemAdd.length) {
    ul.innerHTML += `<li class='list_item' data-todo=${itemAdd}>
  <span>${itemAdd}</span>
  <i class='far fa-trash-alt' data-trash=${itemAdd}></i></li>`;

    event.target.reset()
  }
});

ul.addEventListener("click", (event) => {
  const clickEvent = event.target;
  if (clickEvent.dataset.trash) {
    document
      .querySelector(`[data-todo="${clickEvent.dataset.trash}"]`)
      .remove();
  }

  // if (Array.from(clickEvent.classList).includes("delete")) {
  //   clickEvent.parentElement.remove();
  // }
});

todoSearch.addEventListener("input", (event) => {
  const searchEvent = event.target.value.trim().toLowerCase();
  Array.from(ul.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(searchEvent))
    .forEach((todo) => todo.classList.add("d-none"));
  Array.from(ul.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(searchEvent))
    .forEach((todo) => todo.classList.remove("d-none"));
});
