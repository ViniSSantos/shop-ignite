import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './LoginForm.module.css'; // Estilos CSS

const LoginForm = () => {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Verifica se os campos estão preenchidos
    if (!user || !password) {
      setErrorMsg('Por favor, preencha os dados');
      return;
    }

    try {
      // Chama a API para validar o usuário e senha
      const response = await fetch('URL_DA_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, password }),
      });

      if (response.ok) {
        // Usuário válido, execute a lógica de autenticação ou redirecionamento
        // por exemplo, definindo um token de autenticação no local storage

        // Redirecionar para dentro do portal
        console.log('Successful login');
      } else {
        setErrorMsg('Invalid user or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMsg('An error occurred. Please try again.');
    }
  };

  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError(''); // Limpa a mensagem de erro ao digitar uma nova senha
  };

  return (
    <div className={styles.formInputs}>
      <p className={styles.error}>{errorMsg}</p>
      <form onSubmit={handleSignIn}>
        <label>
          <input
            type="text"
            name="user"
            placeholder="Username"
            autoComplete="username"
            value={user}
            onChange={handleUserChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        {passwordError && <p className={styles.error}>{passwordError}</p>}
        <button className={styles.loginButton} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
