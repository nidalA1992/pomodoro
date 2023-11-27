import { useState } from 'react';

export const useNotifications = () => {
  const [notify, setNotify] = useState('');

  return { message: notify, notify: (message: string) => setNotify(message) };
};
