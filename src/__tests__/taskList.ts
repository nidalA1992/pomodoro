import { type ITask, createTask, updateTask } from '../domain/task';
import {
  addTask,
  createTaskList,
  deleteTask,
  updateTaskList,
} from '../domain/task-list';
import { checkInitialDates, checkMissingArguments } from './utils';

describe('\n______TASK LIST ACTIONS______\n', () => {
  describe('1. create task list', () => {
    const taskList = createTaskList();

    test('task list created', () => {
      expect(taskList).toBeInstanceOf(Object);
    });

    test('task list has necessary properties with necessary values', () => {
      expect(taskList).toHaveProperty('id');
      expect(taskList).toHaveProperty('tasks');
      expect(taskList.tasks).toBeInstanceOf(Object);
      expect(Object.keys(taskList.tasks).length).toEqual(0);
      expect(taskList).toHaveProperty('completedTaskAmount');
    });

    checkInitialDates(taskList.createdAt, taskList.updatedAt);
  });

  describe('2. addTask', () => {
    let taskList = createTaskList();

    const newTask = createTask('test task');

    checkMissingArguments(addTask);

    taskList = addTask(newTask, taskList);

    test('new task added in task list', () => {
      expect(taskList.tasks[newTask.id] === newTask).toEqual(true);
    });
  });

  describe('3. updateTaskList', () => {
    let taskList = createTaskList();
    const newTask = createTask('test task');

    taskList = addTask(newTask, taskList);

    const updatedTask = updateTask(newTask, { content: 'new task content' });
    const updatedNotExistTaskList = updateTaskList(
      { id: 'test' } as ITask,
      taskList
    );

    checkMissingArguments(updateTaskList);

    test('task no exist', () => {
      expect(updatedNotExistTaskList).toBeInstanceOf(Object);
      expect(updatedNotExistTaskList === taskList).toEqual(true);
    });

    const updatedList = updateTaskList(updatedTask, taskList);

    test('task was updated in task list', () => {
      expect(taskList.tasks[updatedTask.id].id === newTask.id).toEqual(true);
      expect(updatedList === taskList).toEqual(false);
    });
  });

  describe('4. deleteTask', () => {
    let taskList = createTaskList();
    const newTask = createTask('test task');
    taskList = addTask(newTask, taskList);

    checkMissingArguments(deleteTask);

    test('delete not exist task', () => {
      const deletedNotExistTaskList = deleteTask('fakeID', taskList);
      expect(deletedNotExistTaskList).toBeInstanceOf(Object);
      expect(deletedNotExistTaskList === taskList).toEqual(true);
    });

    test('task has been deleted from task list', () => {
      const taskId = newTask.id;
      const withDeletedTaskTaskList = deleteTask(taskId, taskList);

      expect(withDeletedTaskTaskList).toBeInstanceOf(Object);
      expect(withDeletedTaskTaskList.tasks[taskId]).toBeUndefined();
      expect(withDeletedTaskTaskList === taskList).toEqual(false);
    });
  });
});
