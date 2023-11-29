import { INotificationService } from '../global-ports';
import { useUsersService } from '../../services/user/useUsersService';
import { IUserService, IUserStoreService } from './ports';
import { useNotifications } from '../../services/useNotification';
import { useUserStore } from '../../services/user/useUserStore';

export const useUserCreate = () => {
  const notification: INotificationService = useNotifications();
  const userStore: IUserStoreService = useUserStore();
  const userService: IUserService = useUsersService();

  const createUser = (username: UserName, email: Email) => {
    try {
      const user = userService.createUser(username, email);

      if (!user) {
        notification.notify('create user error');
      }

      userStore.setUser(user);

      return user;
    } catch (error: unknown) {
      if (error instanceof Error) {
        notification.notify(error.message);
      }
    }
  };

  return { createUser, message: notification.message };
};
