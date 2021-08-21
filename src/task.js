export default class Task {
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.checked = false;
  }

  static check(task) {
    if (task.checked === true) task.checked = false;
    else task.checked = true;
  }
}
