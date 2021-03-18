import React from 'react';
import { createPortal } from 'react-dom';
import s from './Alert.module.css';

const alertRoot = document.querySelector('#popap-root');

export default function Alert() {
  return createPortal(
    <div className={s.popup}>{this.props.children} </div>,
    alertRoot,
  );
}
