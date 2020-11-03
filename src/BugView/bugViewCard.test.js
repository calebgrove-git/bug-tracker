import React from 'react';
import ReactDOM from 'react-dom';
import BugViewCard from './bugViewCard';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';
const spy = jest.spyOn(redux, 'useDispatch');
spy.mockReturnValue({ username: 'test' });
const spy2 = jest.spyOn(redux, 'useSelector');
spy2.mockReturnValue({ username: 'test' });

describe('BugViewCard component', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<BugViewCard />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    renderer.create(<BugViewCard />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
