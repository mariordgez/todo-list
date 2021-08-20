export default class TaskList {
  constructor() {
    this.list = [];
  }

  addTask(task) {
    this.list.push(task);
  }

  removeTask(index) {
    this.list = TaskList.arrayRemove(this.list, index);
    console.log(this.list);
  }

  static arrayRemove(arr, index) {
    const result = arr.filter((task) => task.index != index);
    console.log(result);
    return result;
  }

  setList(list) {
    this.list = list;
    return this.list;
  }

  getTasks() {
    return this.list;
  }
}
