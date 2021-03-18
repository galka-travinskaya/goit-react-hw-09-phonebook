import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import Logo from '../Logo';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';

import s from './Header.module.css';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={s.container}>
      <Logo />

      {isLoggedIn ? (
        <>
          <NavLink
            to={routes.contacts}
            exact
            className={s.link}
            activeClassName={s.link_active}
          >
            Контакты
          </NavLink>
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
    </header>
  );
}
