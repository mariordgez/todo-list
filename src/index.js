import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Task from './task.js';
import Storage from './storage.js';
import UI from './ui.js';

const todoInput = document.querySelector('.todo-input');
const todoAdd = document.querySelector('.todo-add');

const taskArr = [];

document.addEventListener(
  'DOMContentLoaded',
  UI.uiList(Storage.getList().list)
);

const todo = (event) => {
  event.preventDefault();

  const newTask = new Task(todoInput.value, taskArr.length);
  taskArr.push(newTask);
  Storage.saveTask(newTask);
  console.log(taskArr);
  UI.addToUI(newTask);
};

todoAdd.addEventListener('click', todo);
