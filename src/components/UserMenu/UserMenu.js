import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, logOut } from '../../redux/auth';
import defaultAvatar from '../../images/default-avatar.png';
import Button from '@material-ui/core/Button';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div className={s.menu}>
      <img src={defaultAvatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Добро пожаловать, {name}</span>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={onLogOut}
      >
        Выйти
      </Button>
    </div>
  );
}
