import { FormLayout } from '../../../layouts/form-layout';
import { Input } from '../../../shared/input';
import { PrimaryButton } from '../../../shared/primary-button';
import { Title } from '../../../shared/title';
import { useSignUpForm } from './useSignUpForm';
import { AltLink } from '../../../component/alt-link';

export const SignUpForm = () => {
  const { handleSubmit, message } = useSignUpForm();

  return (
    <FormLayout onSubmit={handleSubmit}>
      <Title color='white'>Зарегестрируйся и можешь начинать!</Title>
      <Input
        type='text'
        name='name'
        placeholder='Ваше имя'
        minLength={3}
        maxLength={15}
        required
      />
      <Input type='email' name='email' placeholder='E-mail' required />
      <AltLink text='Уже зарегестрировался?' path='/' linkText='Жми сюда' />
      <PrimaryButton>Зарегестрироваться</PrimaryButton>
      {message && <p style={{ color: 'var(--white)' }}>{message}</p>}
    </FormLayout>
  );
};
