import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

configure({adapter: new Adapter()});

describe("Testing the <CourseList /> Component", () => {
	beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

	it("Test if <CourseList /> is rendered without crashing", () => {
		let wrapper = shallow(<CourseList shouldRender />);
		expect(wrapper.exists()).equal(true);
	});
});
