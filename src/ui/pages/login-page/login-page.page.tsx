import { LoginForm } from '../../features/login/login-form';
import { AuthLayout } from '../../layouts/auth-layout';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
