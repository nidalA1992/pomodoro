import React from 'react';
import { IUser } from '../../domain/user';
import { IUserStoreService } from '../../application/user/ports';

const userContext = React.createContext({} as IUserStoreService);

export const useUserStore = () => {
  const user = React.useContext(userContext);

  return user;
};

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = React.useState<IUser | null>(null);

  const userContextValue = {
    user,
    setUser: (user: IUser | null) => {
      setUser(user);
    },
  };

  return (
    <userContext.Provider value={userContextValue}>
      {children}
    </userContext.Provider>
  );
};
