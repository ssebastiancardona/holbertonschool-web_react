// Create the action creator:
// the goal of this section is to create four action creators that will send the four types we previously created.
//  Remember to import all the types from uiActionTypes in this file.
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

// The function login will accept email and password as arguments. It will return the action with LOGIN as a type and the user object:
// { user : { email, password } }
// The function logout will create the action with the type LOGOUT
// The function displayNotificationDrawer will create the action with the type DISPLAY_NOTIFICATION_DRAWER
// The function hideNotificationDrawer will create the action with the type HIDE_NOTIFICATION_DRAWER


export function login(email, password) {
  return {
    type: LOGIN,
    user : { email, password },
  };
}

export function logout(index) {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer(index) {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer(index) {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}
