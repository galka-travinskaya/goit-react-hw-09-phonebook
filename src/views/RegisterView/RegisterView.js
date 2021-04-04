import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { register } from '../../redux/auth';
import Alert from '../../components/Alert';
import {
  notificationAction,
  notificationSelectors,
} from '../../redux/notification';
import alert from '../../transition/Transition.module.css';
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
      error();
    },
    [dispatch, name, email, password],
  );

  const notification = useSelector(notificationSelectors.getError);

  const error = () => {
    if (email === '' || password === '' || name === '') {
      dispatch(
        notificationAction.showNotification({
          message: 'Some field is empty',
          error: true,
        }),
      );
    }

    setTimeout(() => {
      dispatch(
        notificationAction.showNotification({
          message: '',
          error: false,
        }),
      );
    }, 2000);
    return ;
  };

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