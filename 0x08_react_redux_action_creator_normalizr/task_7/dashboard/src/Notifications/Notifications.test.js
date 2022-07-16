import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe.skip("Testing the <Notifications /> Component", () => {

	let wrapper;

	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
		wrapper = shallow(<Notifications />);
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it("<Notifications /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});

	it("<Notifications /> renders three list items", () => {
		expect(wrapper.find(NotificationItem)).to.have.lengthOf(0);
	});

	it("<Notifications /> render the text Your notifications", () => {
		expect(wrapper.contains(<div className='menuItem'>Your notifications</div>)).to.equal(true);
	});

	it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
		const handleDisplayDrawer = jest.fn();
		const handleHideDrawer = jest.fn();

		const wrapper = shallow(
			<Notifications
				handleDisplayDrawer={handleDisplayDrawer}
				handleHideDrawer={handleHideDrawer}
			/>
		);

		wrapper.find("#menuItem").simulate("click");

		expect(handleDisplayDrawer).toHaveBeenCalled();
		expect(handleHideDrawer).not.toHaveBeenCalled();

		jest.restoreAllMocks();
	});

	it("verify that clicking on the button calls handleHideDrawer", () => {
		const handleDisplayDrawer = jest.fn();
		const handleHideDrawer = jest.fn();

		const wrapper = shallow(
			<Notifications
				displayDrawer
				handleDisplayDrawer={handleDisplayDrawer}
				handleHideDrawer={handleHideDrawer}
			/>
		);

		wrapper.find("#closeNotifications").simulate("click");

		expect(handleDisplayDrawer).not.toHaveBeenCalled();
		expect(handleHideDrawer).toHaveBeenCalled();

		jest.restoreAllMocks();
	});
});
