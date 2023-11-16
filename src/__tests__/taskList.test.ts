import { ITask } from '../domain/task-list';
import {
  createTaskList,
  addTask,
  updateTask,
  deleteTask,
} from '../domain/task-list/actions';

const NANOID_ID_LENGTH = 21;
const MIN_TASK_CONTENT_LENGTH = 3;

describe('\n______TASK LIST ACTIONS______\n', () => {
  const taskList = createTaskList();
  let newTask: ITask;

  describe('1. createTaskList', () => {
    test('create task list', () => {
      expect(taskList).toBeInstanceOf(Object);
    });
    test('task list has necessary properties and values', () => {
      expect(taskList.id.length).toBeGreaterThanOrEqual(NANOID_ID_LENGTH);
      expect(taskList.completedTaskAmount).toEqual(0);
      expect(taskList.tasks).toBeInstanceOf(Object);
      checkInitialDates(taskList.createdAt, taskList.updatedAt);
    });
  });

  describe('2. addTask', () => {
    const taskContent = 'test task';
    newTask = addTask(taskContent, taskList);

    checkMissingArguments(addTask);

    test('task has necessary properties', () => {
      expect(newTask.id.length).toBeGreaterThanOrEqual(NANOID_ID_LENGTH);
      expect(newTask.amount).toEqual(1);
      expect(newTask.content === taskContent).toEqual(true);
      expect(
        typeof newTask.content === 'string' &&
          newTask.content.length > MIN_TASK_CONTENT_LENGTH
      ).toBeTruthy();
      checkInitialDates(newTask.createdAt, newTask.updatedAt);
    });

    test('new task added in task list', () => {
      expect(taskList.tasks[newTask.id] === newTask).toEqual(true);
    });
  });

  describe('3. updateTask', () => {
    const prevTask = newTask;
    const newTaskValue = 'test task updated';

    checkMissingArguments(updateTask);
    checkEntityIsExist(() =>
      updateTask('fakeID', taskList, { content: 'content for fake task' })
    );

    const updatedTask = updateTask(newTask.id, taskList, {
      content: newTaskValue,
    });

    test('update task', () => {
      expect(updatedTask).toBeInstanceOf(Object);
      expect(updatedTask).toHaveProperty('id');
      expect(updatedTask).toHaveProperty('content');
      expect(updatedTask).toHaveProperty('amount');
      expect(updatedTask).toHaveProperty('createdAt');
      expect(updatedTask).toHaveProperty('updatedAt');
    });

    test('don`t decrease task amount if current amount is equal 1', () => {
      expect(updateTask(newTask.id, taskList, { changeAmount: 'dec' })).toEqual(
        false
      );
      expect(updateTask(newTask.id, taskList, { changeAmount: 'dec' })).toEqual(
        false
      );
      expect(taskList.tasks[newTask.id].amount === 1).toEqual(true);
    });

    test('increase task amount', () => {
      expect(updateTask(newTask.id, taskList, { changeAmount: 'inc' })).toEqual(
        true
      );
      expect(updateTask(newTask.id, taskList, { changeAmount: 'inc' })).toEqual(
        true
      );
      expect(taskList.tasks[newTask.id].amount === 3).toEqual(true);
    });

    test('task updated in tasklist without mutate', () => {
      const taskInTaskList = taskList.tasks[updatedTask.id];
      expect(
        prevTask !== updatedTask &&
          prevTask.id === taskInTaskList.id &&
          taskInTaskList.createdAt === prevTask.createdAt &&
          taskInTaskList.updatedAt !== prevTask.updatedAt
      ).toBeTruthy();
    });
  });

  describe('4. deleteTask', () => {
    checkMissingArguments(deleteTask);
    checkEntityIsExist(() => deleteTask('fakeId', taskList));

    test('task has been deleted from task list', () => {
      const taskId = newTask.id;
      expect(deleteTask(taskId, taskList)).toEqual(true);
      expect(taskList.tasks[taskId]).toBeUndefined();
    });
  });
});

// utils
function checkEntityIsExist(cb: Function) {
  test('throw an error if entity not exist', () => {
    expect(cb()).toThrow('Not exist');
  });
}

function checkMissingArguments(cb: Function) {
  test('throw an error if arguments not passed', () => {
    // @ts-ignore
    expect(() => cb()).toThrow(new Error('Missing arguments'));
  });
}

function checkInitialDates(createdAt: string, updatedAt: string) {
  expect(isDateTimeString(createdAt)).toBeTruthy();
  expect(createdAt === updatedAt).toEqual(true);
}

function isDateTimeString(date: string): boolean {
  return new Date(date).toISOString() === date;
}
