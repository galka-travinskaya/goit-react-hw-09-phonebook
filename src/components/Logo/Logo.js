import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import s from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <NavLink to={routes.home} exact>
        <CSSTransition in={true} appear={true} classNames={s} timeout={500}>
          <h1 className={s.title}>Phonebook</h1>
        </CSSTransition>
      </NavLink>
    </>
  );
};

export default Logo;
