let addBtn;
let toDoInput;
let errorInfo;
let tasksList;
let tools;
let newLi;
let completeButtons;
let popUp;
let popUpInput;
let acceptBtn;
let cancelBtn;
let popupError;

const main = () => {
  prepareDomElements();
  prepareDomEvents();
};

const prepareDomElements = () => {
  addBtn = document.querySelector(".btn-add");
  toDoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  tasksList = document.querySelector(".todolist ul");
  tools = document.querySelector(".tools");
  popUp = document.querySelector(".popup");
  popUpInput = document.querySelector(".popup-input");
  acceptBtn = document.querySelector(".accept");
  cancelBtn = document.querySelector(".cancel");
  popupError = document.querySelector(".popup-info");
};

const prepareDomEvents = () => {
  addBtn.addEventListener("click", addNewTask);
  tasksList.addEventListener("click", checkClick);
  cancelBtn.addEventListener("click", closePopup);
  acceptBtn.addEventListener("click", editTask);
};

const addNewTask = () => {
  if (toDoInput.value !== "") {
    newLi = document.createElement("li");
    newLi.textContent = toDoInput.value;
    tasksList.appendChild(newLi);
    createTools(newLi);
    toDoInput.value = "";
    errorInfo.textContent = "";
    // main();
  } else {
    errorInfo.textContent = "Wpisz treść zadania!";
    errorInfo.style.color = "red";
  }
};

let taskToBeEdited;

const checkClick = (e) => {
  if (e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    editToDo(e);
  } else {
    e.target.closest("li").remove();
    popUp.classList.remove("active");
  }
};

const editToDo = (e) => {
  taskToBeEdited = e.target.closest("li");
  popUp.classList.add("active");
  popUpInput.value = e.target.closest("li").firstChild.textContent;
};

const editTask = () => {
  if (popUpInput.value == "") {
    popupError.textContent = "Musisz podać jakąś treść!";
    popupError.style.color = " red";
  } else {
    taskToBeEdited.firstChild.textContent = popUpInput.value;
    popUp.classList.remove("active");
    popupError.textContent = ``;
  }
};

const closePopup = () => {
  popUp.classList.remove("active");
  popupError.textContent = ``;
};

const createTools = (newLi) => {
  const toolsDiv = document.createElement("div");
  toolsDiv.classList.add("tools");

  const completeButtons = document.createElement("button");
  completeButtons.classList.add("complete");
  completeButtons.innerHTML = `<i class="fas fa-check"></i>`;

  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.textContent = "EDIT";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerHTML = `<i class="fas fa-times"></i>`;

  toolsDiv.append(completeButtons, editButton, deleteButton);
  newLi.appendChild(toolsDiv);
};

document.addEventListener("DOMContentLoaded", main);
