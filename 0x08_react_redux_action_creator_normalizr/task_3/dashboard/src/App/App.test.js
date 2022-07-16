import React from 'react';
// import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import App, {firstListNotifications} from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { user, logOut } from './AppContext.js';

configure({adapter: new Adapter()});

describe('Testing the <App /> Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('should not crash', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('should contain the Header  component', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it.skip('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(" Footer")).toHaveLength(1);
  });
});

describe('loggin prop is true', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("CourseList is not displayed with isLoggedIn false by default", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
  it.skip("isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });
});

describe('App states', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("Has default state for displayDrawer false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it.skip("test to verify that the logIn function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const loggedUser = {
      email: "paula@louvani.com",
      password: "123456789",
      isLoggedIn: true,
    };

    const instance = wrapper.instance();
    expect(wrapper.state().user).toEqual(user);
    instance.logIn(loggedUser.email, loggedUser.password);
    expect(wrapper.state().user).toEqual(loggedUser);
  });

  it.skip("test to verify that the logOut function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const loggedUser = {
      email: "paula@louvani.com",
      password: "123456789",
      isLoggedIn: true,
    };

    const instance = wrapper.instance();
    expect(wrapper.state().user).toEqual(user);
    instance.logIn(loggedUser.email, loggedUser.password);
    expect(wrapper.state().user).toEqual(loggedUser);
    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
  });

  it.skip("verify that markNotificationAsRead works as intended", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const instance = wrapper.instance();
    expect(wrapper.state().listNotifications).toEqual(
      firstListNotifications
    );
    instance.markNotificationAsRead(4);
    expect(wrapper.state().listNotifications).toEqual(
      firstListNotifications
    );
    instance.markNotificationAsRead(3);
    expect(wrapper.state().listNotifications).toEqual(
      firstListNotifications.slice(0, 2)
    );
    instance.markNotificationAsRead(1);
    expect(wrapper.state().listNotifications).toEqual(
      firstListNotifications.slice(1, 2)
    );
  });
})
