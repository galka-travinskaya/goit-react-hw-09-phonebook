import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav>
      <NavLink
        to={routes.register}
        className={s.link}
        activeClassName={s.link_active}
      >
        Регистрация
      </NavLink>
      <NavLink
        to={routes.login}
        className={s.link}
        activeClassName={s.link_active}
      >
        Логин
      </NavLink>
    </nav>
  );
};

export default AuthNav;
