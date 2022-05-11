import mainArr from "./../api/task.js";
// console.log(mainArr);
import * as library from "./helpers/library.js";

let database = window.localStorage;
let data = JSON.parse(database.getItem("todos"))
  ? JSON.parse(database.getItem("todos"))
  : mainArr;

let todoText = document.querySelector(".text-todo");
let todoMaker = document.querySelector(".btn-add");
let mainList = document.querySelector(".list-group");

todoMaker.addEventListener("click", () => {
  if (todoText.value.trim().length < 3) {
    alert("U may write a task not a code!");
    return;
  } else if (todoText.value.trim() === "") {
    alert("dont be lazy, write a task");
    return;
  }

  let newObj = library.objCreator(todoText.value);
  data.push(newObj);

  database.setItem("todos", JSON.stringify(data));

  let newNode = library.creator(newObj.id, newObj.text, newObj.text);

  mainList.prepend(newNode);
  todoText.value = "";
});

data.forEach((todo) => {
  let newNode = library.creator(todo.id, todo.text, todo.isDone);
  mainList.prepend(newNode);
});

mainList.addEventListener("click", (event) => {
  let clickedNode = event.target;
  console.log(clickedNode);

  if (!mainList.contains(clickedNode)) return;

  if (!clickedNode.closest("[data-type]")) return;

  switch (clickedNode.dataset.type) {
    case "delete":
      let deleted = clickedNode.parentNode.parentNode;
      console.log(deleted);
      data = data.filter((todo) => {
        return todo.id != deleted.dataset.id;
      });

      database.setItem("todos", JSON.stringify(data));
      deleted.remove();
      break;
  }
});
