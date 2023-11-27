import { INotificationService } from '../global-ports';
import { useNotifications } from '../../services/useNotification';
import { useUserStore } from '../../services/user/useUserStore';

export const useUserLogout = () => {
  const userStore = useUserStore();
  const notifications: INotificationService = useNotifications();

  try {
    const logout = () => {
      userStore.setUser(null);
    };

    return { logout, message: notifications.message };
  } catch (error: unknown) {
    if (error instanceof Error) {
      notifications.notify('get all users error');
    }
  }
};
