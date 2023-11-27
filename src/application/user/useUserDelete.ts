import { useNotifications } from '../../services/useNotification';
import { useUserStore } from '../../services/user/useUserStore';
import { useUsersService } from '../../services/user/useUsersService';
import { INotificationService } from '../global-ports';
import { IUserService, IUserStoreService } from './ports';

export const useUserDelete = () => {
  const notification: INotificationService = useNotifications();
  const userStorage: IUserStoreService = useUserStore();
  const userService: IUserService = useUsersService();

  const deleteUser = (userId: UniqueId) => {
    try {
      const user = userService.deleteUser(userId);

      if (!user) {
        notification.notify('User not exist');
      }

      userStorage.setUser(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        notification.notify(error.message);
      }
    }
  };

  return { deleteUser, message: notification.message };
};
