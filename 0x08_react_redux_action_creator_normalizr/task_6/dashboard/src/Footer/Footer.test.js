import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Footer from './Footer';
import AppContext from "../App/AppContext";
import { user, logOut } from "../App/AppContext";

configure({adapter: new Adapter()});

describe("Testing the <Footer /> Component", () => {
	it("Footer renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).equal(true);
  });

	it.skip("Verify that the components at the very least render the text “Copyright”", () => {
    const wrapper = shallow(<Footer />);
    wrapper.update();
    expect(wrapper.find("p")).length(1);
    expect(wrapper.find(".footer p").text()).toContain("Copyright");
  });

  it("verify that the link is not displayed when the user is logged out within the context", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).length(0);
  });

  it("verify that the link is displayed when the user is logged in within the context", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).length(1);
    expect(wrapper.find("div.footer a").text()).equal("Contact us");
  });
});
