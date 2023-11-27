import { nanoid } from 'nanoid';
import { createInitialDate } from '../shared/util/createInitialDate';
import { type IInitialDate } from '../shared/util/interfaces';

export interface IUser extends IInitialDate {
  id: UniqueId;
  username: UserName;
  email: Email;
  tasksList: UniqueId;
  timerOption: UniqueId;
  statistics: UniqueId;
}

export function createUser(
  username: UserName,
  email: Email,
  timerId: UniqueId,
  statisticId: UniqueId,
  tasksListId: UniqueId
): IUser {
  return {
    id: nanoid(),
    username,
    email,
    tasksList: tasksListId,
    timerOption: timerId,
    statistics: statisticId,
    ...createInitialDate(),
  };
}
