import { FormEventHandler } from 'react';

export const useLoginForm = () => {
  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
  };

  return { handleSubmit };
};
