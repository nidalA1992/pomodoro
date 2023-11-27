import { FormEventHandler } from 'react';
import { useUserLogin } from '../../../../application/user/useUserLogin';

export const useLoginForm = () => {
  const { login, message } = useUserLogin();

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const [[, name], [, email]] = [...formData.entries()];

    login(String(name), String(email));
  };

  return { handleSubmit, message };
};
