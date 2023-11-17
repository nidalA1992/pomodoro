import { type ITask, createTask, updateTask } from '../domain/task';
import {
  checkMissingArguments,
  checkInitialDates,
  checkEntityIsExist,
} from './snippets';

const NANOID_ID_LENGTH = 21;
const MIN_TASK_CONTENT_LENGTH = 3;

describe('\n______TASK ACTIONS______\n', () => {
  let task: ITask;

  describe('1. createTask', () => {
    const taskContent = 'test task';
    task = createTask(taskContent);

    checkMissingArguments(createTask);

    test('task created', () => {
      expect(task).toBeInstanceOf(Object);
    });

    test('task has necessary properties with necessary values', () => {
      expect(task.id.length).toBeGreaterThanOrEqual(NANOID_ID_LENGTH);
      expect(task.amount).toEqual(1);
      expect(task.content === taskContent).toEqual(true);
      expect(
        typeof task.content === 'string' &&
          task.content.length > MIN_TASK_CONTENT_LENGTH
      ).toBeTruthy();
      checkInitialDates(task.createdAt, task.updatedAt);
    });
  });

  describe('2. updateTask', () => {
    const newTaskContent = 'test task updated';
    const prevTask = task;

    checkMissingArguments(updateTask);

    test('update task content', () => {
      const updatedTask = updateTask(task, { content: newTaskContent });
      expect(updatedTask).toBeInstanceOf(Object);
      expect(
        typeof updatedTask.content === 'string' &&
          updatedTask.content !== prevTask.content
      ).toEqual(true);
    });

    test('increase task amount', () => {
      let updatedTask = updateTask(task, { changeAmount: 'inc' });
      expect(updatedTask.amount - prevTask.amount === 1).toEqual(true);
      updatedTask = updateTask(updatedTask, { changeAmount: 'inc' });
      expect(updatedTask.amount - prevTask.amount === 2).toEqual(true);
      updatedTask = updateTask(updatedTask, { changeAmount: 'inc' });
      expect(updatedTask.amount - prevTask.amount === 3).toEqual(true);
    });

    let decreasedTask = updateTask(task, { changeAmount: 'inc' });

    test('decrease task amount', () => {
      decreasedTask = updateTask(decreasedTask, { changeAmount: 'inc' });
      decreasedTask = updateTask(decreasedTask, { changeAmount: 'inc' });
      const initialAmount = decreasedTask.amount;
      decreasedTask = updateTask(decreasedTask, { changeAmount: 'dec' });
      expect(initialAmount - decreasedTask.amount === 1).toEqual(true);
      decreasedTask = updateTask(decreasedTask, { changeAmount: 'dec' });
      expect(initialAmount - decreasedTask.amount === 2).toEqual(true);
      decreasedTask = updateTask(decreasedTask, { changeAmount: 'dec' });
      expect(initialAmount - decreasedTask.amount === 3).toEqual(true);
    });

    test('don`t decrease task amount if current amount is equal 1', () => {
      decreasedTask = updateTask(decreasedTask, { changeAmount: 'dec' });
      expect(decreasedTask.amount >= 1).toEqual(true);
      decreasedTask = updateTask(decreasedTask, { changeAmount: 'dec' });
      expect(decreasedTask.amount >= 1).toEqual(true);
      decreasedTask = updateTask(decreasedTask, { changeAmount: 'dec' });
      expect(decreasedTask.amount >= 1).toEqual(true);
    });
  });
});
