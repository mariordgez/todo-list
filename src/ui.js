import Task from './task.js';
import Storage from './storage.js';

const bookTable = document.querySelector('.book_holder');
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

  static displayList(list) {
    list.forEach((book) => {
      UI.addToUI(book);
      UI.deleteBook();
    });
  }

  static deleteBook() {
    document.querySelectorAll('.remove_book').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        const deleteTitle =
          e.target.parentElement.children[0].innerText.slice(0);
        const deleteAuthor =
          e.target.parentElement.children[1].innerText.slice(4);
        const bookDelete = new Book(deleteTitle, deleteAuthor);
        Storage.deleteBook(bookDelete);
      });
    });
  }
}
