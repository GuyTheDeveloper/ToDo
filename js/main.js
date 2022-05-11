let todoText = document.querySelector(".text-todo");
let todoMaker = document.querySelector(".btn-add");
let mainList = document.querySelector(".list-group");
let listSecond = document.querySelector(".list-group-item");

todoMaker.addEventListener("click", () => {
  let LIST = document.createElement("li");
  LIST.className = "list-group-item d-flex align-items-center";

  let INPUT = document.createElement("input");
  INPUT.className = "form-check-input me-3";
  INPUT.type = "checkbox";
  LIST.append(INPUT);

  let TEXT = document.createElement("div");
  TEXT.className = "text w-100";
  TEXT.textContent = todoText.value;
  LIST.append(TEXT);

  let BTN_WRAPPER = document.createElement("div");
  BTN_WRAPPER.className = "d-flex gap-1";

  let BTN_EDIT = document.createElement("button");
  BTN_EDIT.className = "btn btn-warning";
  BTN_EDIT.textContent = "Edit";
  BTN_WRAPPER.append(BTN_EDIT);

  let BTN_DELETE = document.createElement("button");
  BTN_DELETE.className = "btn btn-danger";
  BTN_DELETE.textContent = "Delete";
  BTN_WRAPPER.append(BTN_DELETE);

  LIST.append(BTN_WRAPPER);
  mainList.append(LIST);

  todoText.value = "";

  BTN_DELETE.addEventListener("click", () => {
    LIST.remove();
  });
});
