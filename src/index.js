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

document.addEventListener(
  'DOMContentLoaded',
  UI.displayList(Storage.getList().list)
);
document.addEventListener('DOMContentLoaded', UI.buttonTask());

const todo = (event) => {
  event.preventDefault();
  const index = Storage.getList().list.length + 1;
  const newTask = new Task(todoInput.value, index);
  Storage.saveTask(newTask);

  UI.addToUI(newTask);
  UI.checkTask();
  UI.buttonTask();
};

todoAdd.addEventListener('click', todo);
