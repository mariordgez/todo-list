export default class TaskList {
  constructor() {
    this.list = [];
  }

  addTask(task) {
    this.list.push(task);
  }

  removeTask(index) {
    this.list = TaskList.arrayRemove(this.list, index);
  }

  static arrayRemove(arr, index) {
    let newIndex = 1;
    const result = arr.filter((task) => task.index != index);
    result.forEach((task) => {
      task.index = newIndex;
      newIndex += 1;
    });
    return result;
  }

  removeCompleted() {
    let newIndex = 1;
    const result = this.list.filter((task) => task.checked === false);
    result.forEach((task) => {
      task.index = newIndex;
      newIndex += 1;
    });
    console.log(result);
    this.list = result;
  }

  setList(list) {
    this.list = list;
    return this.list;
  }

  getTasks() {
    return this.list;
  }
}
