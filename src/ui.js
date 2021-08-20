import Task from './task.js';
import Storage from './storage.js';
import TaskList from './tasklist.js';

const todoList = document.querySelector('.todo-list');

export default class UI {
  static addToUI(task) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const todoCheck = document.createElement('input');
    todoCheck.type = 'checkbox';
    todoCheck.classList.add('todo-check');
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

  static displayList = (arr) => {
    arr.forEach((task) => {
      UI.addToUI(task);
      UI.checkTask();
    });
  };
  static checkTask() {
    document.querySelectorAll('.todo-check').forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          const newList = new TaskList();
          e.target.parentElement.classList.add('checked');
          console.log(e.target.parentElement.children[1].innerText.slice(0));
          Storage.getList().list.forEach((task) => {
            if (
              task.description ===
              e.target.parentElement.children[1].innerText.slice(0)
            ) {
              task.checked = true;
            }
            newList.addTask(task);
            console.log(newList);
          });
          Storage.saveList(newList);
        } else {
          e.target.parentElement.classList.remove('checked');
        }
      });
    });
  }
}
