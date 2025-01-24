
const tasks = [];

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = `task ${task.completed ? 'completed' : ''}`;

    const descriptionSpan = document.createElement('span');
    descriptionSpan.className = 'description';
    descriptionSpan.textContent = task.description;

    const completeBtn = document.createElement('button');
    completeBtn.className = 'completed-btn';
    completeBtn.textContent = task.completed ? 'Unmark' : 'Complete';
    completeBtn.onclick = () => toggleTaskCompletion(index);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(index);

    taskDiv.appendChild(descriptionSpan);
    taskDiv.appendChild(completeBtn);
    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv);
  });
}

// Add a new task
function addTask() {
  const taskDescription = taskInput.value.trim();
  if (taskDescription) {
    tasks.push({ description: taskDescription, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

// Toggle task completion
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  tasks.sort((a, b) => a.completed - b.completed); // Move completed tasks to the end
  renderTasks();
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
