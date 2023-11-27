import { AuthLayout } from '../../layouts/auth-layout';
import { Input } from '../../shared/input';
import { PrimaryButton } from '../../shared/primary-button';
import { SecondaryButton } from '../../shared/secondary-button';

export const LoginPage = () => {
  return (
    <AuthLayout>
      AUTH PAGE
      <Input placeholder='Введите имя' />
      <PrimaryButton>Зарегестрироваться</PrimaryButton>
      <PrimaryButton disabled>Зарегестрироваться</PrimaryButton>
      <SecondaryButton>Зарегестрироваться</SecondaryButton>
      <SecondaryButton disabled>Зарегестрироваться</SecondaryButton>
    </AuthLayout>
  );
};
