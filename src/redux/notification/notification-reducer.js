import { createReducer } from '@reduxjs/toolkit';
import notificationAction from './notification-actions';

const initialNotifiationState = {message: '', error: false}

const notification = createReducer(initialNotifiationState, {
  [notificationAction.showNotification]: (_, { payload }) => payload,
});

export default notification;
