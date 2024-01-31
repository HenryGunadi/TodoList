const input = document.querySelector("#input");
const submitBtn = document.querySelector("#submit-button");
const container = document.querySelector("#container");
const form = document.querySelector("#form");
const textWarn = document.querySelector(".warning");

// add todo list
let todoList = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  textWarn.innerHTML = "";

  if (input.value !== "") {
    // push array
    todoList.push(input.value);
    console.log(todoList);

    // DOM;
    const todoItem = document.createElement("div");
    const border = document.createElement("hr");
    todoItem.classList.add("grid", "grid-cols-3", "grid-flow-col", "gap-4", "w-full", "my-1", "p-5", "rounded-sm");
    todoItem.style.boxShadow = "4px 4px 3px rgba(0, 0, 0, 0.3)";
    todoItem.style.gridTemplateColumns = "1fr 3fr 1fr";

    // Add the individual elements for the todo item
    todoItem.innerHTML = `

      <div class="flex w-full h-full items-center"><input type="checkbox" class="me-3 w-5 h-5 checkboxes"></div>
      <div class="flex w-full justify-start items-center"><p class="text-lg">${input.value}</p></div>
      <div class="flex w-full justify-center items-center"><img src="images/trash-2.svg" class="hover:scale-110 hover:duration-100 delete"></div>
    `;

    // Append the new todo item to the container
    container.appendChild(todoItem);

    // Delete task
    const deleteTaskIcons = document.querySelectorAll(".delete");

    deleteTaskIcons.forEach((deleteIcon, index) => {
      deleteIcon.addEventListener("click", () => {
        // Remove the corresponding task from the todoList
        todoList.splice(index, 1);

        // Remove the corresponding todo item from the DOM
        container.removeChild(todoItem);

        console.log(todoList); // Log the updated todoList
      });
    });

    // CHECKBOX
    const checkboxIcon = document.querySelectorAll(".checkboxes");

    checkboxIcon.forEach((checkboxIcons, index) => {
      checkboxIcons.addEventListener("click", () => {
        todoItem.classList.toggle("line-through");
      });
    });
  } else {
    const warning = document.createElement("p");
    warning.textContent = "Please insert a task..";
    warning.classList.add("text-red-600");
    textWarn.appendChild(warning);
  }
  input.value = "";
});
