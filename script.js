// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span class="task-text">${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function handleTaskClick(event) {
        if (event.target.classList.contains('delete-btn')) {
            const li = event.target.parentElement;
            taskList.removeChild(li);
        } else if (event.target.classList.contains('task-checkbox')) {
            const li = event.target.parentElement;
            if (event.target.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        }
    }
});
