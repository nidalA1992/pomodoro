import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './ui/pages/error-page';
import { AuthLayout } from './ui/layouts/auth-layout';
import { LoginForm } from './ui/features/auth/login-form';
import { SignUpForm } from './ui/features/auth/sign-up-form';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LoginForm />,
      },
      {
        path: '/sign-up',
        element: <SignUpForm />,
      },
    ],
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
