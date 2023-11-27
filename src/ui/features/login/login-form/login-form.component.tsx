import { FormLayout } from '../../../layouts/form-layout';
import { useLoginForm } from './useLoginForm';
import { Input } from '../../../shared/input';
import { Title } from '../../../shared/title';
import { PrimaryButton } from '../../../shared/primary-button';

export const LoginForm = () => {
  const { handleSubmit, message } = useLoginForm();

  return (
    <FormLayout onSubmit={handleSubmit}>
      <Title color='white'>Совсем чуть-чуть и можем начинать!</Title>
      <Input
        type='text'
        name='name'
        placeholder='Ваше имя'
        minLength={3}
        maxLength={15}
        required
      />
      <Input type='email' name='email' placeholder='E-mail' required />
      <PrimaryButton>Начать</PrimaryButton>
      {message && <p style={{ color: 'var(--white)' }}>{message}</p>}
    </FormLayout>
  );
};
