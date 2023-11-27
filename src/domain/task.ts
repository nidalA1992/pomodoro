import { nanoid } from 'nanoid';
import type { IInitialDate } from '../shared/util/interfaces';
import { createInitialDate } from '../shared/util/createInitialDate';
import { IUser } from './user';

export interface ITask extends IInitialDate {
  id: UniqueId;
  content: string;
  amount: number;
}

export interface ITaskList {
  id: UniqueId;
  tasks: UniqueId[];
}

export function createTask(content: string): ITask {
  if (!content) {
    throw new Error('Missing arguments');
  }

  const task = {
    id: nanoid(),
    content,
    amount: 1,
    ...createInitialDate(),
  };

  return task;
}

export function updateTask(task: ITask, updatedData: Partial<ITask>): ITask {
  if (!task || !updatedData) {
    throw new Error('Missing arguments');
  }

  const updatedTask = { ...task, ...updateTask };

  task.updatedAt = new Date().toISOString();

  return updatedTask;
}

export function createTaskList(): ITaskList {
  return {
    id: nanoid(),
    tasks: [],
  };
}
