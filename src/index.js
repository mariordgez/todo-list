import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const todoInput = document.querySelector('.todo-input');
const todoAdd = document.querySelector('.todo-add');
const todoList = document.querySelector('.todo-list');

todoAdd.addEventListener('click', todo);

function todo(event) {
  event.preventDefault();

  const todoDiv = document.createElement('div');
  const todoLi = document.createElement('li');
  todoLi.innerText = todoInput.innerText.value;
  todoDiv.appendChild(todoLi);
  const todoCheck = document.createElement('button');
  todoCheck.type = 'checkbox';
  todoDiv.appendChild(todoCheck);
  // Lodash, now imported by this script
  todoList.appendChild(todoDiv);
}

document.body.appendChild(component());
