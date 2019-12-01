import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text: text,
    dueDate
  };
  console.log('action in addReminder ', action);
  return action;
};

export const deleteReminder = id => {
  const action = {
    type: DELETE_REMINDER,
    id: id
  };
  console.log('delete in actions', action);
  return action;
};

export const clearReminders = () => {
  const action = {
    type: CLEAR_REMINDERS
  };
  return action;
};
