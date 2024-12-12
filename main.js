const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delet';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li)
    }
});