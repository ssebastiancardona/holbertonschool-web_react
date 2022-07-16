import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

describe("ui action creators tests", function () {
  it("Calling login with user as argument should return: { type: SELECT_COURSE, user : { email, password } }", () => {
    const user = { email: "paula@gmail.com", password: 'abcd' };
    const expected = { type: LOGIN, user };
    const recived = login(user.email, user.password);
    expect(recived).toEqual(expected);
  });

  it("Calling logout should return: { type: LOGOUT }", () => {
    const recived = logout();
    expect(recived).toEqual({ type: LOGOUT});
  });

  it("Calling displayNotificationDrawer should return: { type: DISPLAY_NOTIFICATION_DRAWER }", () => {
    const recived = displayNotificationDrawer();
    expect(recived).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER});
  });

  it("Calling hideNotificationDrawer should return: { type: HIDE_NOTIFICATION_DRAWER }", () => {
    const recived = hideNotificationDrawer();
    expect(recived).toEqual({ type: HIDE_NOTIFICATION_DRAWER});
  });
});
