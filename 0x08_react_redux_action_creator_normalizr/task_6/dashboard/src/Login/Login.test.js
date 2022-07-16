import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

configure({adapter: new Adapter()});

describe("Testing the <Login /> Component", () => {
	beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
	it("Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).equal(true);
  });

	it.skip("<Login /> render 2 inputs", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('input')).lengthOf(2);
	});

	it.skip("<Login /> render 2 labels", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('label')).lengthOf(2);
	});

	it('Test to verify that the submit button is disabled by default', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('input').at(2).props().disabled).equal(true);
	});

	it('Test to verify that after changing the value of the two inputs, the button is enabled', () => {
		const wrapper = shallow(<Login />);
		wrapper.find('input').at(0).simulate('change', { target: { name: 'email', value: 'yulyzulu@hotmail.com'} });
		wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: '1234'} });
		expect(wrapper.find('input').at(2).props().disabled).equal(false);
	});

});
