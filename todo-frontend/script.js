document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");

    // Carregar tarefas do localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.text;
            if (task.completed) {
                li.classList.add("completed");
            }
            li.addEventListener("click", () => toggleTask(index));
            taskList.appendChild(li);
        });
        saveTasks();
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        renderTasks();
    }

    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });

    renderTasks();
});
