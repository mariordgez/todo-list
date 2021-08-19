import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const todoInput = document.querySelector('.todo-input');
const todoAdd = document.querySelector('.todo-add');
const todoList = document.querySelector('.todo-list');
const taskArr = [];
todoAdd.addEventListener('click', todo);
class Task {
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.checked = false;
  }
}

function todo(event) {
  event.preventDefault();

  const newTask = new Task(todoInput.value, taskArr.length);
  taskArr.push(newTask);
  console.log(taskArr);
  ui(newTask);
}

function ui(task) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const todoLi = document.createElement('li');
  todoLi.classList.add('todo-item');
  todoLi.innerText = task.description;
  todoDiv.appendChild(todoLi);
  const todoCheck = document.createElement('input');
  todoCheck.type = 'checkbox';
  todoDiv.appendChild(todoCheck);
  // Lodash, now imported by this script
  todoList.appendChild(todoDiv);
}
