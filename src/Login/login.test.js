import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';
const spy = jest.spyOn(redux, 'useDispatch');
spy.mockReturnValue({ username: 'test' });
const spy2 = jest.spyOn(redux, 'useSelector');
spy2.mockReturnValue({ username: 'test' });
const mockDispatch = jest.fn();

beforeAll(() => {
  redux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);
});

beforeEach(() => {
  redux.useDispatch.mockClear();
});

describe('Card component', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<Login />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    renderer.create(<Login />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
  it('renders the UI as expected', () => {
    renderer.create(<Login />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
