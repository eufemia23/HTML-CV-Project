const addButton = document.getElementById('add-button');
const tasksContainer = document.getElementById('tasks');
const taskInput = document.getElementById('task-input');

const tasksArray = [];
let taskName = '';
let object = '';

function createTask() {
  taskName = document.getElementById('task-input').value;
  taskInput.value = '';
  object = {
    description: taskName,
    status: 'uncomplete'
  }
  tasksArray.push(object);
}

function renderTasks() {  
  tasksContainer.innerHTML = '';
  tasksArray.forEach((value, index) => {
    const newTaskElement = document.createElement('div');
    const newCheckButtonElement = document.createElement('button');
    const newCheckImageElement = document.createElement('img');
    const newTaskTextElement = document.createElement('p');
    const newBinButtonElement = document.createElement('img');
  
    newTaskElement.className = 'task';
    newCheckButtonElement.classList.add('check-button');
    newCheckImageElement.className = 'check-img';
    newCheckImageElement.setAttribute('src', 'img/check.png');
    newTaskTextElement.className = 'task-text';
    newBinButtonElement.className = 'bin-img';
    newBinButtonElement.setAttribute('src', 'img/bin.png');
    newBinButtonElement.setAttribute('id', 'bin-button');
    
    newBinButtonElement.dataset.indexNumber = index;
    newCheckButtonElement.dataset.status = value.status;
    newCheckImageElement.dataset.status = value.status;
    newTaskTextElement.dataset.status = value.status;
  
    newTaskElement.append(newCheckButtonElement, newTaskTextElement, newBinButtonElement);
    newCheckButtonElement.appendChild(newCheckImageElement);
  
    tasksContainer.appendChild(newTaskElement);

    const textNode = document.createTextNode(value.description);
    newTaskTextElement.appendChild(textNode);

    newBinButtonElement.addEventListener('click', () => {
      tasksArray.splice(newBinButtonElement.dataset.indexNumber, 1);
      renderTasks();
    })

    newCheckButtonElement.addEventListener('click', () => {
      if (newCheckButtonElement.dataset.status === 'uncomplete') {
        value.status = 'complete';
        renderTasks();
      } 
      if (newCheckButtonElement.dataset.status === 'complete') {
        value.status = 'uncomplete';
        renderTasks();
      }
    })
  })
}

addButton.addEventListener('click', () => {
  createTask();
  renderTasks();
})


taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    createTask();
    renderTasks();
  }
})









