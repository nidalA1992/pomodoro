import { IUserService } from '../../application/user/ports';
import { createTimerOptions } from '../../domain/timer';
import { createStatisticObject } from '../../domain/statistics';
import { IUser, createUser } from '../../domain/user';
import { storageLocale } from '../../util/storageLocale';
import { createTaskList } from '../../domain/task';

export const useUsersService = (): IUserService => {
  return {
    createUser: (username: UserName, email: Email) => {
      const timer = createTimerOptions();
      const statistics = createStatisticObject();
      const tasksList = createTaskList();
      const user = createUser(
        username,
        email,
        timer.id,
        statistics.id,
        tasksList.id
      );

      storageLocale('set', timer.id, timer);
      storageLocale('set', tasksList.id, tasksList);
      storageLocale('set', statistics.id, statistics);

      let users = storageLocale('get', 'users');

      if (!users) {
        users = [];
      }

      users.push(user);
      storageLocale('set', 'users', users);

      return user;
    },
    deleteUser: userId => {
      return storageLocale('delete', userId);
    },
    login: (username: UserName, email: Email) => {
      const users = storageLocale('get', 'users') as IUser[];

      const user = users?.find(
        user => user.username === username && email === user.email
      );

      if (!user) {
        return null;
      }

      return user;
    },
    usersIds: () => {
      return storageLocale('get', 'users') || [];
    },
  };
};
