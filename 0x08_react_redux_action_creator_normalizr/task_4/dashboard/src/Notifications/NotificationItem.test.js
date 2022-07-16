import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

configure({adapter: new Adapter()});

describe("Testing <NotificationItem /> Component", () => {
	beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
	let wrapper;

	it("<NotificationItem /> is rendered without crashing", () => {
		wrapper = shallow(<NotificationItem shouldRender />);
		expect(wrapper).to.not.be.an("undefined");
	});
});
