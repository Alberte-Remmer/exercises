"use strict";

// 1. Globale variabler
let editingCompleted = false;

// 2. Event listeners
document.getElementById("add-btn").addEventListener("click", klik);
window.addEventListener("DOMContentLoaded", loadTasks);

// 3. Funktion til at gemme alle opgaver i localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#todo-list li, #completed-list li").forEach((li) => {
    tasks.push({
      id: li.id,
      text: li.childNodes[1].textContent,
      completed: li.parentNode.id === "completed-list",
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 4. Funktion til at hente og genskabe opgaver fra localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.id = task.id;

    // Done-knap
    const doneBtn = document.createElement("button");
    doneBtn.className = "done-btn";
    if (task.completed) {
      doneBtn.textContent = "✔";
      doneBtn.classList.add("checked");
    } else {
      doneBtn.textContent = "\u00A0";
    }
    doneBtn.addEventListener("click", doneBtnToggle);

    // Edit-knap
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", editText);

    // Delete-knap
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "✖";
    deleteBtn.addEventListener("click", deleteTask);

    // Tilføj knapper og tekst til li
    li.appendChild(doneBtn);
    li.appendChild(document.createTextNode(task.text));
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Tilføj li til den rigtige liste
    if (task.completed) {
      li.classList.add("completed");
      document.getElementById("completed-list").appendChild(li);
    } else {
      document.getElementById("todo-list").appendChild(li);
    }
  });
}

// 5. Funktion til at tilføje en opgave
function klik() {
  const task = document.querySelector("input").value;
  // Inputvalidering.
  //trim() fjerner alle mellemrum før og efter en tekststreng. if (!task.trim()) betyder: Hvis inputfeltet enten er tomt eller kun indeholder mellemrum, så udføres koden inde i if-blokken.
  if (!task.trim()) {
    alert("You need to enter a task before adding it to the list.");
    return;
  }

  const li = document.createElement("li");
  li.id = "task-" + crypto.randomUUID();

  // Done-knap
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "";
  doneBtn.className = "done-btn";
  doneBtn.addEventListener("click", doneBtnToggle);

  // Edit-knap
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.addEventListener("click", editText);

  // Delete-knap
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "✖";
  deleteBtn.addEventListener("click", deleteTask);

  // Tilføj knapper og tekst til li
  li.appendChild(doneBtn);
  li.appendChild(document.createTextNode(task));
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Tilføj li til den rigtige liste
  if (editingCompleted) {
    doneBtn.classList.add("checked");
    doneBtn.textContent = "✔";
    li.classList.add("completed");
    document.getElementById("completed-list").appendChild(li);
    editingCompleted = false;
  } else {
    document.getElementById("todo-list").appendChild(li);
  }

  document.querySelector("input").value = "";
  saveTasks();
}

// 6. Funktion til at markere opgave som færdig/ikke færdig
function doneBtnToggle(event) {
  const button = event.target; // Fanger knappen der blev klikket på
  button.classList.toggle("checked");
  const li = button.parentNode;
  if (button.classList.contains("checked")) {
    button.textContent = "✔";
    li.classList.add("completed");
    document.getElementById("completed-list").appendChild(li);
  } else {
    button.textContent = "";
    li.classList.remove("completed");
    document.getElementById("todo-list").appendChild(li);
  }
  saveTasks();
}

// 7. Funktion til at redigere en opgave
function editText() {
  const input = document.querySelector("input");
  const li = this.parentNode;
  input.value = li.childNodes[1].textContent;
  editingCompleted = li.parentNode.id === "completed-list";
  li.remove();
  saveTasks();
}

// 8. Funktion til at slette en opgave
function deleteTask() {
  const li = this.parentNode;
  li.remove();
  document.querySelector("input").value = "";
  saveTasks();
}
