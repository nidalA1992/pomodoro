import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>HOME PAGE</h1>,
    children: [],
  },
  {
    path: '/dashboard',
    element: (
      <div>
        <h1>MAIN PAGE</h1>
        <h2>MAIN PAGE</h2>
        <h3>MAIN PAGE</h3>
        <h4>MAIN PAGE</h4>
        <h5>MAIN PAGE</h5>
      </div>
    ),
    children: [],
  },
]);
