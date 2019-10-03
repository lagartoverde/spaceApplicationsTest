import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-15';
import AddFriendForm from './AddFriendForm';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddFriendForm  addFriend={() => {}}/>, div);
});

it('calls the add friend function', () => {
  const addFriendFn = jest.fn();
  const wrapper = mount(<AddFriendForm addFriend={addFriendFn}/>);
  const form = wrapper.find('form');
  form.simulate('submit')
  expect(addFriendFn).toHaveBeenCalledTimes(1);
});

it('sends the correct values to the add friend function', () => {
  const addFriendFn = jest.fn(data => data);
  const wrapper = mount(<AddFriendForm addFriend={addFriendFn}/>);
  const nameInput = wrapper.find('#name')
  const maleRadioButton = wrapper.find('#maleRadioButton')
  const form = wrapper.find('form');
  nameInput.simulate('change', {target: {value: 'Oscar'}});
  maleRadioButton.simulate('change', {target: {value: 'male'}});
  form.simulate('submit');
  expect(addFriendFn).toHaveBeenCalledTimes(1);
  expect(addFriendFn.mock.calls[0][0]).toEqual({name: 'Oscar', gender: 'male'});
})

it('component matches the snapshot', () => {
  const component = renderer
    .create(<AddFriendForm  addFriend={() => {}}/>)
    .toJSON();
  expect(component).toMatchSnapshot();
})