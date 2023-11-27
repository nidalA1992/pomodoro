import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>HOME PAGE</h1>,
    children: [],
  },
  {
    path: '/dashboard',
    element: <h1>MAIN PAGE</h1>,
    children: [],
  },
]);
