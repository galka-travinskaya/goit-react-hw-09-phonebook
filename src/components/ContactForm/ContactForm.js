import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import contactsOperations from '../../redux/contacts/contacts-operations';
import {
  notificationAction,
  notificationSelectors,
} from '../../redux/notification';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import Alert from '../Alert';

import s from './ContactForm.module.css';
import alert from '../../transition/Transition.module.css';
import Button from '@material-ui/core/Button';

export default function ContactForm() {
  const [name, setName] = useState('');

  const updateName = e => {
    setName(e.currentTarget.value);
  };

  const [number, setNumber] = useState('');

  const updateNumber = e => {
    setNumber(e.currentTarget.value);
  };

  // const [showAlert, setShowAlert] = useState(false);

  // const toggleAlert = message => {
  //   setShowAlert(true);
  //   setErrorMessage(message);
  //   setTimeout(() => setShowAlert(false), 1000);
  // };

  const reset = () => {
    setName('');
    setNumber('');
  };

  // const [errorMessage, setErrorMessage] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const notification = useSelector(notificationSelectors.getError);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      setTimeout(() => {
        dispatch(
          notificationAction.showNotification({
            message: '',
            error: false,
          }),
        );
      }, 2000);
      
      if (!name || !number) {
        // toggleAlert('The list is empty');
        dispatch(
          notificationAction.showNotification({
            message: 'The list is empty',
            error: true,
          }),
        );
        return;
      }

      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        )
      ) {
        dispatch(
          notificationAction.showNotification({
            message: 'Contact is already exist',
            error: true,
          }),
        );
        // toggleAlert('Contact is already exist');
        reset();
        return;
      }

      // setTimeout(() => {
      //   dispatch(
      //     notificationAction.showNotification({
      //       message: '',
      //       error: false,
      //     }),
      //   );
      // }, 2000);

      dispatch(contactsOperations.addContact(name, number));
      reset();
    },
    [contacts, dispatch, name, number],
  );

  return (
    <form className={s.form} onSubmit={handleSubmit}>
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
      <label className={s.label}>
        <span className={s.text}>Имя</span>
        <input type="text" name="name" value={name} onChange={updateName} />
      </label>

      <label className={s.label}>
        <span className={s.text}>Номер</span>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={updateNumber}
        />
      </label>
      <Button type="submit" variant="contained" color="primary">
        Сохранить
      </Button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//     showAlert: false,
//     errorMessage: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     if (!name || !number) {
//       this.toggleAlert('The list is empty');
//       return;
//     }

//     if (
//       this.props.contacts.find(
//         ({ name }) => name.toLowerCase() === this.state.name.toLowerCase(),
//       )
//     ) {
//       this.toggleAlert('Contact is already exist');
//       this.reset();
//       return;
//     }

//     this.props.onSubmit(name, number);

//     this.reset();
//   };

//   toggleAlert = message => {
//     this.setState({ showAlert: true, errorMessage: message });
//     setTimeout(() => this.setState({ showAlert: false }), 1000);
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { showAlert, errorMessage } = this.state;
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <CSSTransition
//           in={showAlert}
//           timeout={250}
//           classNames={alert}
//           unmountOnExit
//         >
//           <Alert>
//             <p>{errorMessage}</p>
//           </Alert>
//         </CSSTransition>
//         <label className={s.label}>
//           <span className={s.text}>Имя</span>
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>

//         <label className={s.label}>
//           <span className={s.text}>Номер</span>
//           <input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
//         </label>
//         <Button type="submit" variant="contained" color="primary">
//           Сохранить
//         </Button>
//       </form>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   contacts: getContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (newName, number) =>
//     dispatch(contactsOperations.addContact(newName, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
