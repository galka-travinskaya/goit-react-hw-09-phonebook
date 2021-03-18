import axios from 'axios';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .catch(error => dispatch(deleteContactsError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const resetContacts = () => dispatch => {
  dispatch(fetchContactsSuccess([]));
};

export default { addContact, deleteContact, fetchContacts, resetContacts };
