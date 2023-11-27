import { AuthLayout } from '../../layouts/auth-layout';
import { Input } from '../../shared-components/input';

export const LoginPage = () => {
  return (
    <AuthLayout>
      AUTH PAGE
      <Input placeholder='Введите имя' />
    </AuthLayout>
  );
};
