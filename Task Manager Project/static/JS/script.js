let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();

  document.getElementById("task-form").addEventListener("submit", addTask);
  document.getElementById("search").addEventListener("keyup", filterTasks);
  document.getElementById("filter").addEventListener("change", filterTasks);
});

function renderTasks() {
  const taskList = document.getElementById("task-list");
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const filterOption = document.getElementById("filter").value;
  taskList.innerHTML = "";

  tasks
    .filter(task => {
      if (filterOption === "completed" && !task.completed) return false;
      if (filterOption === "pending" && task.completed) return false;
      if (!task.text.toLowerCase().includes(searchQuery)) return false;
      return true;
    })
    .forEach((task, index) => {
      const li = document.createElement("li");
      if (task.completed) li.classList.add("done");
      li.innerHTML = `
        <span>${task.text}</span>
        <div class="actions">
          <button class="done" onclick="toggleTask(${index})">Done</button>
          <button class="edit" onclick="editTask(${index})">Edit</button>
          <button class="delete" onclick="deleteTask(${index})">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
    });
}

function addTask(event) {
  event.preventDefault();
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function filterTasks() {
  renderTasks();
}
