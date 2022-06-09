import { shallow, mount } from "enzyme";
import React from "react";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";

describe("<App />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("App renders without crashing", () => {
    const wraper = shallow(<App />);
    expect(wraper.exists()).toEqual(true);
  });
  it("should contain the Notifications component", () => {
    const wraper = shallow(<App />);
    wraper.update();
    expect(wraper.find("Notifications")).toHaveLength(1);
  });
  it("should contain the Header component", () => {
    const wraper = shallow(<App />);
    wraper.update();
    expect(wraper.find("Header")).toHaveLength(1);
  });
  it("should contain the Login component", () => {
    const wraper = shallow(<App />);
    wraper.update();
    expect(wraper.find("Login")).toHaveLength(1);
  });
  it("should contain the Footer component", () => {
    const wraper = shallow(<App />);
    wraper.update();
    expect(wraper.find("Footer")).toHaveLength(1);
  });
  it("CourseList is not displayed with isLoggedIn false by default", () => {
    const wraper = shallow(<App />);
    wraper.update();
    expect(wraper.find("CourseList")).toHaveLength(0);
  });
  it("isLoggedIn is true", () => {
    const wraper = shallow(<App isLoggedIn />);
    wraper.update();
    expect(wraper.find("Login")).toHaveLength(0);
    expect(wraper.find("CourseList")).toHaveLength(1);
  });

  it("when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const event = {};
    const logou = jest.fn();

    document.addEventListener = jest.fn((event, cb) => {
      event[event] = cb;
    });

    window.alert = jest.fn();

    shallow(<App logOut={logou} />);

    event.keydown({ key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logou).toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  it("Has default state for displayDrawer false", () => {
    const wraper = shallow(<App />);
    expect(wraper.state().displayDrawer).toEqual(false);
  });

  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wraper = shallow(<App />);
    expect(wraper.state().displayDrawer).toEqual(false);

    const instance = wraper.instance();

    instance.handleDisplayDrawer();

    expect(wraper.state().displayDrawer).toEqual(true);
  });

  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const wraper = shallow(<App />);
    expect(wraper.state().displayDrawer).toEqual(false);

    // :)

    wraper.instance().handleDisplayDrawer();

    expect(wraper.state().displayDrawer).toEqual(true);

    wraper.instance().handleHideDrawer();

    expect(wraper.state().displayDrawer).toEqual(false);
  });
});
