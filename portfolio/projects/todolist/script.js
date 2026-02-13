document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if(taskText === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
        <div class="task-left">
            <input type="checkbox" onclick="toggleTask(this)">
            <span>${taskText}</span>
        </div>
        <span class="delete" onclick="deleteTask(this)">X</span>
    `;

    document.getElementById("taskList").appendChild(li);
    saveTasks();
    input.value = "";
}

function toggleTask(checkbox) {
    let text = checkbox.nextElementSibling;
    text.classList.toggle("completed");
    saveTasks();
}

function deleteTask(element) {
    element.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", 
        document.getElementById("taskList").innerHTML);
}

function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if(saved) {
        document.getElementById("taskList").innerHTML = saved;
    }
}