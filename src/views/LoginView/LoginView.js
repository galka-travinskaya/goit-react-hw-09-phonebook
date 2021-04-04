import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { logIn } from '../../redux/auth';
import Alert from '../../components/Alert';
import {
  notificationAction,
  notificationSelectors,
} from '../../redux/notification';

import s from './LoginVeiw.module.css';
import alert from '../../transition/Transition.module.css';
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

  const notification = useSelector(notificationSelectors.getError);

  return (
    <div className={s.content}>
      <CSSTransition
        in={notification.error}
        timeout={250}
        classNames={alert}
        unmountOnExit
      >
        <Alert>
          <p>{notification.message}</p>
        </Alert>
      </CSSTransition>
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
