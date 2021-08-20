import Task from './task.js';
import Storage from './storage.js';

const todoList = document.querySelector('.todo-list');

export default class UI {
  static addToUI(task) {
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
  }

  static uiList = (arr) => {
    arr.forEach((task) => {
      UI.addToUI(task);
    });
  };
}
