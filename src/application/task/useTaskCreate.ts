import type { ITaskStoreService, ITasksService } from './port';
import { createTask as _createTask } from '../../domain/task';
import { useUserStore } from '../../services/user/useUserStore';
import { IUserStoreService } from '../user/ports';
import { INotificationService } from '../global-ports';
import { useNotifications } from '../../services/useNotification';

export const useTaskCreate = () => {
  const userStore: IUserStoreService = useUserStore();
  const taskNotification: INotificationService = useNotifications();
  const taskStoreService: ITaskStoreService = {} as ITaskStoreService;
  const tasksService: ITasksService = {} as ITasksService;

  const createTask = (taskContent: string) => {
    if (!userStore.user) {
      return;
    }

    const task = tasksService.createTask(
      userStore.user.tasksList,
      _createTask(taskContent)
    );

    if (!task) {
      taskNotification.notify('create task error');
    }

    if (!taskStoreService.task) {
      taskStoreService.setTask(task);
    }
  };

  return { createTask };
};
