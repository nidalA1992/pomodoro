import { FormEventHandler } from 'react';
import { useUserCreate } from '../../../../application/user/useUserCreate';

export const useSignUpForm = () => {
  const { createUser, message } = useUserCreate();

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const [[, name], [, email]] = [...formData.entries()];

    createUser(String(name), String(email));
  };

  return { handleSubmit, message };
};
