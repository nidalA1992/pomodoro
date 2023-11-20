import { nanoid } from 'nanoid';

import type { IInitialDate } from '../shared/util/interfaces';
import { createInitialDate } from '../shared/util/createInitialDate';

export interface ITask extends IInitialDate {
  id: UniqueId;
  content: string;
  amount: number;
}

type UpdateOptions = {
  content?: string;
  changeAmount?: 'inc' | 'dec';
};

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

export function updateTask(task: ITask, updatedData: UpdateOptions): ITask {
  if (!task || !updatedData) {
    throw new Error('Missing arguments');
  }

  let updatedTask = task;

  if (updatedData.content) {
    updatedTask = { ...task, content: updatedData.content };
  }

  if (updatedData.changeAmount === 'inc') {
    updatedTask = { ...task, amount: task.amount + 1 };
  }

  if (updatedData.changeAmount === 'dec') {
    if (task.amount > 1) {
      updatedTask = { ...task, amount: task.amount - 1 };
    }
  }

  task.updatedAt = new Date().toISOString();

  return updatedTask;
}
