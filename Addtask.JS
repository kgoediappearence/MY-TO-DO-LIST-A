// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
 
// Add a task when the button is clicked
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim(); // Trim whitespace from input

    if (taskText !== '') {
        // Create a new list item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }
});
