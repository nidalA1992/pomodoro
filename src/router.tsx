import { createBrowserRouter } from 'react-router-dom';
import { AuthPage } from './ui/pages/auth-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
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
