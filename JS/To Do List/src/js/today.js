/* ========== IMPORTS ============ */
require("../css/task.css");
let { getTodayTasks } = require("./backEnd.js");

/* ========== ELEMENTS ========== */
const todayPage = document.createElement("div");
todayPage.className = "content";
const todayHeader = document.createElement("h1");
todayHeader.className = "content-header";
todayHeader.textContent = "Today";
const todayContent = document.createElement("div");
todayContent.className = "today-content";

let todayTasks = getTodayTasks();
todayTasks.forEach((task) => {
  /* ========== ELEMENTS ========== */
  const taskElement = document.createElement("div");
  taskElement.className = "task";
  taskElement.dataset.id = task.id;
  const taskTitle = document.createElement("h2");
  taskTitle.className = "task-title";
  taskTitle.textContent = "Title: " + task.title;
  const taskDescription = document.createElement("p");
  taskDescription.className = "task-description";
  taskDescription.textContent = "Description: " + task.description;
  const taskPriority = document.createElement("p");
  taskPriority.className = "task-priority";
  taskPriority.textContent = "Priority: " + task.priority;
  taskPriority.style.color = `rgb(var(--color-priority-${task.priority}))`;
  const taskButtons = document.createElement("div");
  taskButtons.className = "task-buttons";
  const taskDoneButton = document.createElement("button");
  taskDoneButton.className = "task-done-button";
  taskDoneButton.textContent = "Done";
  const taskRemoveButton = document.createElement("button");
  taskRemoveButton.className = "task-remove-button";
  taskRemoveButton.textContent = "Remove";
  taskButtons.append(taskDoneButton, taskRemoveButton);

  /* ========== EVENTS ========== */
  taskDoneButton.addEventListener("click", () => {
    taskElement.remove();
  })

  taskRemoveButton.addEventListener("click", () => {
    taskElement.remove();
  })

  /* ========== APPEND ========== */
  taskElement.append(taskTitle, taskDescription, taskPriority, taskButtons);
  todayContent.append(taskElement);
})

/* ========== EVENTS ========== */

/* ========== APPEND ========== */
todayPage.append(todayHeader, todayContent);

module.exports = todayPage;
