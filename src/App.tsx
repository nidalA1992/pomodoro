import React from 'react';
import { useUserCreate } from './application/user/useUserCreate';
import { useUserStore } from './services/user/useUserStore';
import { useUserLogin } from './application/user/useUserLogin';

function App() {
  const { createUser, message } = useUserCreate();
  const { login, message: loginMessage } = useUserLogin();
  const { user } = useUserStore();

  const handleRegister: React.FormEventHandler = e => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');

    if (!email || !name) {
      return;
    }

    createUser(String(name), String(email));
  };

  const handleLogin: React.FormEventHandler = e => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');

    if (!email || !name) {
      return;
    }

    login(String(name), String(email));
  };

  return (
    <>
      <h1>{user?.username}</h1>
      <h2>{user?.email}</h2>
      <form onSubmit={handleRegister}>
        <input type='text' name='name' id='name' required />
        <input type='email' name='email' id='email' required />
        {message && <p style={{ color: 'tomato' }}>{message}</p>}
        <button>register</button>
      </form>
      <form onSubmit={handleLogin}>
        <input type='text' name='name' id='name' required />
        <input type='email' name='email' id='email' required />
        {loginMessage && <p style={{ color: 'tomato' }}>{loginMessage}</p>}
        <button>login</button>
      </form>
    </>
  );
}

export default App;
