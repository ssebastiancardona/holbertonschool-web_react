import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from 'aphrodite';

import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

configure({adapter: new Adapter()});

describe('should render correctly a BodySection component and that the props are passed correctly to the child', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('should not crash', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="testing">
        testing test
      </BodySectionWithMarginBottom>,
    );
    expect(wrapper.find('BodySection')).toHaveLength(1);
    expect(wrapper.find('BodySection').props()).toEqual({
      children: 'testing test',
      title: 'testing',
    });
  })
});
