import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

configure({adapter: new Adapter()});
describe("<BodySection />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("BodySection renders without crashing", () => {
    const wrapper = shallow(<BodySection />);
    wrapper.update();
    expect(wrapper.exists()).toEqual(true);
  });

  it("BodySection renders without crashing", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    wrapper.update();

    const h2 = wrapper.find("h2");
    const p = wrapper.find("p");

    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual("test title");

    expect(p).toHaveLength(1);
    expect(p.text()).toEqual("test children node");
  });
  it("BodySection has correct class for style", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    const div = wrapper.find(".bodySection").first();

    expect(div.exists()).toEqual(true);
  });
});

