import { nanoid } from 'nanoid';

import { createInitialDate } from '../shared/util/createInitialDate';
import { type IInitialDate } from '../shared/util/interfaces';
import { type ITask } from './task';

export interface ITaskList extends IInitialDate {
  id: UniqueId;
  tasks: {
    [N: UniqueId]: ITask;
  };
  completedTaskAmount: number;
}

export function createTaskList(): ITaskList {
  return {
    id: nanoid(),
    tasks: {},
    completedTaskAmount: 0,
    ...createInitialDate(),
  };
}

export function addTask(task: ITask, taskList: ITaskList): ITaskList {
  if (!task || !taskList) {
    throw new Error('Missing arguments');
  }

  return {
    ...taskList,
    tasks: { ...taskList.tasks, [task.id]: task },
    updatedAt: new Date().toISOString(),
  };
}

export function updateTaskList(task: ITask, taskList: ITaskList): ITaskList {
  if (!task || !taskList) {
    throw new Error('Missing arguments');
  }

  if (!taskList.tasks[task.id]) {
    return taskList;
  }

  return {
    ...taskList,
    tasks: { ...taskList.tasks, [task.id]: task },
    updatedAt: new Date().toISOString(),
  };
}

export function deleteTask(taskId: UniqueId, taskList: ITaskList): ITaskList {
  if (!taskId || !taskList) {
    throw new Error('Missing arguments');
  }

  if (!taskList.tasks[taskId]) {
    return taskList;
  }

  const { [taskId]: deletedTask, ...tasks } = taskList.tasks;

  return {
    ...taskList,
    tasks,
    updatedAt: new Date().toISOString(),
  };
}

export function increaseCompletedTaskAmount(taskList: ITaskList): ITaskList {
  taskList.completedTaskAmount++;
  return updateTime(taskList);
}

function updateTime(list: ITaskList) {
  list.updatedAt = new Date().toISOString();

  return list;
}
