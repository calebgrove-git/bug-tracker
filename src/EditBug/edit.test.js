import React from 'react';
import ReactDOM from 'react-dom';
import Edit from './edit';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';
import Bug from '../Model/bug';
const spy = jest.spyOn(redux, 'useDispatch');
spy.mockReturnValue({ username: 'test' });
const spy2 = jest.spyOn(redux, 'useSelector');
spy2.mockReturnValue({ username: 'test' });

describe('Card component', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<Edit bug={Bug} />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    renderer.create(<Edit bug={Bug} />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
  it('renders the UI as expected', () => {
    renderer.create(<Edit bug={Bug} />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
