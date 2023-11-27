export const storageLocale = (
  action: 'delete' | 'get' | 'set',
  key: string,
  value?: any
): boolean | any => {
  switch (action) {
    case 'get': {
      const data = localStorage.getItem(key);

      if (data) {
        return JSON.parse(data);
      }

      break;
    }
    case 'set': {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    case 'delete': {
      localStorage.removeItem(key);
      return true;
    }
  }
};
