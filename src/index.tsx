import React from 'react';
import ReactDOM from 'react-dom/client';

import { UserProvider } from './services/user/useUserStore';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
