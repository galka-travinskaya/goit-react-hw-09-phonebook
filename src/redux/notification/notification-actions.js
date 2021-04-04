import { createAction } from '@reduxjs/toolkit';

const showNotification = createAction(
  'error/showNotification',
);

export default {showNotification};
