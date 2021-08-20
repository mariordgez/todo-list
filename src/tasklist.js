export default class TaskList {
  constructor() {
    this.list = [];
  }

  addTask(task) {
    this.list.push(task);
  }

  removeTask(task) {
    this.list = TaskList.arrayRemove(this.list, task);
  }

  static arrayRemove(arr, task) {
    return arr.filter((ele) => !(ele.index === task.index));
  }

  setList(list) {
    this.list = list;
    return this.list;
  }

  getTasks() {
    return this.list;
  }
}
