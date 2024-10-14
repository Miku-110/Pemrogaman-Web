let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;
    if (taskText) {
        tasks.push({ text: taskText, isEditing: false });
        taskInput.value = '';
        renderTasks();
    }
}

function editTask(index) {
    tasks[index].isEditing = true;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function saveTask(index) {
    const editInput = document.getElementById(`edit-input-${index}`);
    tasks[index].text = editInput.value;
    tasks[index].isEditing = false;
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.isEditing) {
            li.innerHTML = `
                <input type="text" id="edit-input-${index}" value="${task.text}">
                <button class="save" onclick="saveTask(${index})">Save</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            `;
        } else {
            li.innerHTML = `
                ${task.text}
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            `;
        }
        taskList.appendChild(li);
    });
}

renderTasks();
