import Task from './task.js';
import TaskList from './tasklist.js';

export default class Storage {
  static saveList(taskList) {
    localStorage.setItem('TaskList', JSON.stringify(taskList));
  }

  static getList() {
    if (localStorage.getItem('TaskList') == null) {
      Storage.saveList(new TaskList());
    }
    const taskList = Object.assign(
      new TaskList(),
      JSON.parse(localStorage.getItem('TaskList'))
    );

    taskList.setList(
      taskList.getTasks().map((task) => Object.assign(new Task(), task))
    );

    return taskList;
  }

  static saveTask(task) {
    const oldList = Storage.getList();
    oldList.addTask(task);
    Storage.saveList(oldList);
  }

  static deleteTask(index) {
    const oldList = Storage.getList();
    oldList.removeTask(index);
    console.log(Storage.getList());
    Storage.saveList(oldList);
  }
}
