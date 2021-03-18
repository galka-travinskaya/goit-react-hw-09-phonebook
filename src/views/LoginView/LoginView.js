import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth';
import s from './LoginVeiw.module.css';
import Button from '@material-ui/core/Button';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(logIn({ email, password }));
      setEmail('');
      setPassword('');
    },
    [dispatch, email, password],
  );

  return (
    <div className={s.content}>
      <h1 className={s.title}>Войдите в аккаунт</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <label>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            className={s.field}
            onChange={updateEmail}
          />
        </label>
        <label>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            className={s.field}
            onChange={updatePassword}
          />
        </label>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={s.btn}
        >
          Войти
        </Button>
      </form>
    </div>
  );
}
