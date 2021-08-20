import Storage from './storage.js';
import Task from './task.js';
import TaskList from './tasklist.js';

const todoList = document.querySelector('.todo-list');

export default class UI {
  static addToUI(task) {
    const todoAllDiv = document.createElement('div');
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.classList.add('todo-li');
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
    todoAllDiv.appendChild(todoDiv);
    // Edit section
    const todoDivEdit = document.createElement('div');
    todoDivEdit.classList.add('todo-edit');
    todoDivEdit.classList.add('todo');
    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.classList.add('todo-input');
    todoDivEdit.appendChild(todoInput);
    const todoEdit = document.createElement('button');
    todoEdit.classList.add('todo-btn-edit');
    todoEdit.innerHTML = '<i class="fas fa-edit"></i>';
    todoDivEdit.appendChild(todoEdit);
    const todoDelete = document.createElement('button');
    todoDelete.classList.add('todo-btn-delete');
    todoDelete.innerHTML = '<i class="fas fa-trash"></i>';
    todoDivEdit.appendChild(todoDelete);
    todoAllDiv.appendChild(todoDivEdit);
    todoList.appendChild(todoAllDiv);
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
            if (
              String(task.index)
              === e.target.parentElement.children[2].innerText.slice(0)
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
              String(task.index)
              === e.target.parentElement.children[2].innerText.slice(0)
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

  static buttonTask() {
    document.querySelectorAll('.todo-btn').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.children[1].classList.toggle(
          'todo-edit',
        );
        e.target.parentElement.classList.toggle('todo-edit');
      });
    });
    this.editTask();
    this.deleteTask();
  }

  static editTask() {
    document.querySelectorAll('.todo-btn-edit').forEach((button) => {
      button.addEventListener('click', (e) => {
        const newDescription = e.target.parentElement.children[0].value;
        const taskIndex = e.target.parentElement.parentElement.children[0].children[2]
          .innerText;
        const uTask = new Task(newDescription, taskIndex);
        const newList = new TaskList();
        Storage.getList().list.forEach((task) => {
          if (String(task.index) === uTask.index) {
            task.description = uTask.description;
          }
          newList.addTask(task);
        });
        Storage.saveList(newList);
        e.target.parentElement.classList.toggle('todo-edit');
        e.target.parentElement.parentElement.children[0].classList.toggle(
          'todo-edit',
        );
        e.target.parentElement.parentElement.children[0].children[1].innerText = uTask.description;
      });
    });
  }

  static deleteTask() {
    document.querySelectorAll('.todo-btn-delete').forEach((button) => {
      button.addEventListener('click', (e) => {
        const taskIndex = parseInt(
          e.target.parentElement.parentElement.children[0].children[2]
            .innerText,
          10,
        );
        Storage.deleteTask(taskIndex);
        e.target.parentElement.parentElement.remove();
      });
    });
  }
}
