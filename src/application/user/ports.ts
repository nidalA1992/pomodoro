import { IUser } from '../../domain/user';

export interface IUserStoreService {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export interface IUserService {
  createUser: (username: UserName, email: Email) => IUser;
  deleteUser: (userId: UniqueId) => boolean;
  login: (username: UserName, email: Email) => IUser | null;
  usersIds: () => UniqueId[];
}
