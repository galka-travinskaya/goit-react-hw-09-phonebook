import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  contactsOperations,
  getVisibleContacts,
  getContacts,
} from '../../redux/contacts';
import Button from '@material-ui/core/Button';

import s from './ContactList.module.css';
import contactTransition from './transitions/ContactTransition.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const allContacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onRemove = useCallback(
    id => dispatch(contactsOperations.deleteContact(id)),
    [dispatch],
  );

  useEffect(() => {
    localStorage.setItem('saveContacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <TransitionGroup component="ul" className={s.list}>
        {contacts.length === 0 && allContacts.length !== 0 ? (
          <CSSTransition in={true} timeout={0} unmountOnExit>
            <li className={s.text}>Countact is not founding</li>
          </CSSTransition>
        ) : (
          contacts.map(({ name, number, id }) => (
            <CSSTransition
              key={id}
              classNames={contactTransition}
              timeout={250}
            >
              <li className={s.items}>
                <p className={s.text}>
                  {name}: {number}
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={onRemove}
                >
                  Удалить
                </Button>
              </li>
            </CSSTransition>
          ))
        )}
      </TransitionGroup>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
