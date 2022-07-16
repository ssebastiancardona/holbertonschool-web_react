import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

// create two action creators that will send the two action types we previously created:

// The function markAsAread will accept index as argument
// The function setNotificationFilter will accept filter as argument

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}
export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}
export const boundSetNotificationFilter = (filter) =>
  dispatch(setNotificationFilter(filter));
