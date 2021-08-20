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
    if (task.checked === true) {
      todoCheck.checked = true;
      todoDiv.classList.add('checked');
    }
    todoDiv.appendChild(todoCheck);

    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-item');
    todoLi.innerText = task.description;
    todoDiv.appendChild(todoLi);
    const todoHidden = document.createElement('div');
    todoHidden.classList.add('todo-hidden');
    todoHidden.innerText = task.index;
    todoDiv.appendChild(todoHidden);

    const todoDots = document.createElement('button');
    todoDots.classList.add('todo-btn');
    todoDots.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    todoDiv.appendChild(todoDots);
    todoList.appendChild(todoDiv);
    UI.checkTask();
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
          Storage.getList().list.forEach((task) => {
            console.log(task.index);
            if (
              String(task.index) ===
              e.target.parentElement.children[2].innerText.slice(0)
            ) {
              task.checked = true;
            }
            newList.addTask(task);
          });
          Storage.saveList(newList);
        } else {
          e.target.parentElement.classList.remove('checked');
          const newList = new TaskList();
          Storage.getList().list.forEach((task) => {
            if (
              String(task.index) ===
              e.target.parentElement.children[2].innerText.slice(0)
            ) {
              task.checked = false;
            }
            newList.addTask(task);
          });
          Storage.saveList(newList);
        }
      });
    });
  }
}
