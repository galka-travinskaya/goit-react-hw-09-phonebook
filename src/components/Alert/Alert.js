import React from 'react';
import { createPortal } from 'react-dom';
import s from './Alert.module.css';

const alertRoot = document.querySelector('#popap-root');

export default function Alert({children}) {
  return createPortal(
    <div className={s.popup}>{children} </div>,
    alertRoot,
  );
}
