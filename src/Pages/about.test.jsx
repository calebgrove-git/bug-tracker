import React from 'react';
import ReactDOM from 'react-dom';
import About from './about';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';
const spy = jest.spyOn(redux, 'useDispatch');
spy.mockReturnValue({ username: 'test' });
const spy2 = jest.spyOn(redux, 'useSelector');
spy2.mockReturnValue({ username: 'test' });

describe('About component', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<About />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    renderer.create(<About />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
