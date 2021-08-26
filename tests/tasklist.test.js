import TaskList from '../src/tasklist.js';
import Task from '../src/task.js';

test('pushes a new task into the task array', () => {
  const tasklist = new TaskList();
  const task1 = new Task('first task', 1);
  const task2 = new Task('first task', 2);
  const task3 = new Task('true second task', 3);
  tasklist.addTask(task1);
  tasklist.addTask(task2);
  tasklist.addTask(task3);
  tasklist.removeTask(2);
  expect(tasklist.list[1].description).toBe('true second task');
});
