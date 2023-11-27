import { useNotifications } from '../../services/useNotification';
import { useUserStore } from '../../services/user/useUserStore';
import { INotificationService } from '../global-ports';
import { IUserStoreService } from '../user/ports';
import { ITaskStoreService, ITasksService } from './port';

export const useTaskDelete = () => {
  const userStore: IUserStoreService = useUserStore();
  const taskStore: ITaskStoreService = {} as ITaskStoreService;
  const taskService: ITasksService = {} as ITasksService;
  const notifications: INotificationService = useNotifications();

  const deleteTask = (taskId: UniqueId) => {
    if (!userStore.user) {
      notifications.notify('user not exist');
      return;
    }

    const result = taskService.deleteTask(userStore.user?.tasksList, taskId);

    if (!result) {
      notifications.notify('delete tasks error');
    }

    if (taskStore.task.id === taskId) {
      taskStore.setTask(null);
    }
  };

  return { deleteTask };
};
