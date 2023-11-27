import { INotificationService } from '../global-ports';
import { IUserService, IUserStoreService } from './ports';
import { useNotifications } from '../../services/useNotification';
import { useUsersService } from '../../services/user/useUsersService';
import { useUserStore } from '../../services/user/useUserStore';

export const useUserLogin = () => {
  const notification: INotificationService = useNotifications();
  const userStore: IUserStoreService = useUserStore();
  const userService: IUserService = useUsersService();

  const login = (username: UserName, email: Email) => {
    try {
      const user = userService.login(username, email);

      if (!user) {
        notification.notify('User not exist');
      }

      userStore.setUser(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        notification.notify(error.message);
      }
    }
  };

  return { login, message: notification.message };
};
