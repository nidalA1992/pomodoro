import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './ui/pages/login-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    children: [],
  },
  {
    path: '/dashboard',
    element: (
      <div>
        <h1>DASHBOARD</h1>
        <h2>DASHBOARD</h2>
        <h3>DASHBOARD</h3>
        <h4>DASHBOARD</h4>
        <h5>DASHBOARD</h5>
      </div>
    ),
    children: [],
  },
]);
