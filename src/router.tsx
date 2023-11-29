import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './ui/pages/error-page';
import { AuthLayout } from './ui/layouts/auth-layout';
import { LoginForm } from './ui/features/auth/login-form';
import { SignUpForm } from './ui/features/auth/sign-up-form';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <LoginForm />,
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUpForm />,
      },
    ],
  },
  {
    path: `${ROUTES.USER}/:userName`,
    element: (
      <div>
        <h1>user</h1>
      </div>
    ),
    children: [],
  },
]);
