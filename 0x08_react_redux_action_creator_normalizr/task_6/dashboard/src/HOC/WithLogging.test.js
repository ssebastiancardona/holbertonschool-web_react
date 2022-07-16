import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hoc from './WithLogging';
import Login from '../Login/Login';

configure({adapter: new Adapter()});

test.skip('check console log was called when mounte and on unmounted with pure html', () => {
  console.log = jest.fn();
  const HocLoggin = Hoc(() => <p>test</p>);
  const wrapper = mount(<HocLoggin />);
  expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
  wrapper.unmount();
  expect(console.log).toHaveBeenCalledWith(
    'Component Component is going to unmount',
  );

  jest.restoreAllMocks();
});

test.skip('check with a login component the HOC exact console log output', () => {
  console.log = jest.fn();
  const HocLoggin = Hoc(Login);
  const wrapper = mount(<HocLoggin />);
  expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
  wrapper.unmount();
  expect(console.log).toHaveBeenCalledWith(
    'Component Login is going to unmount',
  );

  jest.restoreAllMocks();
});
