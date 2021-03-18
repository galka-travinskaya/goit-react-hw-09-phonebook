import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import { contactsOperations } from '../../redux/contacts';

import s from './ContactsView.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <ContactForm />

        <h2>Контакты</h2>
        <Filter />

        <ContactList />
      </div>
    </section>
  );
}
