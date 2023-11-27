import { ITask } from '../../domain/task';

export interface ITasksService {
  createTask: (taskListId: UniqueId, task: ITask) => ITask;
  updateTask: (
    taskListId: UniqueId,
    taskId: UniqueId,
    task: Partial<ITask>
  ) => ITask;
  deleteTask: (taskListId: UniqueId, taskId: UniqueId) => boolean;
  getTasks: () => ITask[];
}

export interface ITaskStoreService {
  task: ITask;
  setTask: (task: ITask | null) => void;
}
