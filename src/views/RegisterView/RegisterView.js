import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth';
import s from './Register.module.css';
import Button from '@material-ui/core/Button';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateName = e => {
    setName(e.target.value);
  };

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

      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, name, email, password],
  );

  return (
    <div className={s.content}>
      <h1 className={s.title}>Регистрация</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            className={s.field}
            onChange={updateName}
          />
        </label>
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
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}
