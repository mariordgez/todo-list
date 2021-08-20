import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Task from './task.js';
import Storage from './storage.js';

const todoInput = document.querySelector('.todo-input');
const todoAdd = document.querySelector('.todo-add');
const todoList = document.querySelector('.todo-list');
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

const taskArr = [];
const uiList = (arr) => {
  arr.forEach((task) => {
    addToUI(task);
  });
};

document.addEventListener('DOMContentLoaded', uiList(Storage.getList().list));

const todo = (event) => {
  event.preventDefault();

  const newTask = new Task(todoInput.value, taskArr.length);
  taskArr.push(newTask);
  Storage.saveTask(newTask);
  console.log(taskArr);
  addToUI(newTask);
};

todoAdd.addEventListener('click', todo);
