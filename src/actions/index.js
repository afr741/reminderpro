import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

export const addReminder = text => {
  const action = {
    type: ADD_REMINDER,
    text: text
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
