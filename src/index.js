import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Task from './task.js';

const todoInput = document.querySelector('.todo-input');
const todoAdd = document.querySelector('.todo-add');
const todoList = document.querySelector('.todo-list');
const task1 = new Task('hello', 0);
const task2 = new Task('hello', 1);
const taskArr = [task1, task2];

const addToUI = (task) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const todoCheck = document.createElement('input');
  todoCheck.type = 'checkbox';
  todoDiv.appendChild(todoCheck);

  const todoLi = document.createElement('li');
  todoLi.classList.add('todo-item');
  todoLi.innerText = task.description;
  todoDiv.appendChild(todoLi);

  const todoDots = document.createElement('button');
  todoDots.classList.add('todo-btn');
  todoDots.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  todoDiv.appendChild(todoDots);
  todoList.appendChild(todoDiv);
};

const todo = (event) => {
  event.preventDefault();

  const newTask = new Task(todoInput.value, taskArr.length);
  taskArr.push(newTask);
  console.log(taskArr);
  addToUI(newTask);
};

todoAdd.addEventListener('click', todo);

const uiList = (arr) => {
  arr.forEach((task) => {
    addToUI(task);
  });
};
uiList(taskArr);
