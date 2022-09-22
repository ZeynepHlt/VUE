const todoText = document.querySelector("#todoText");
const addBtn = document.querySelector("#addBtn");
const todo = document.querySelector("#todoList");

addBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = todoText.value;
    todoList.append(listItem);
});