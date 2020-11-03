import React from 'react';
import ReactDOM from 'react-dom';
import ViewCompleted from './viewCompleted';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';
const spy = jest.spyOn(redux, 'useDispatch');
spy.mockReturnValue({ username: 'test' });
const spy2 = jest.spyOn(redux, 'useSelector');
spy2.mockReturnValue({ username: 'test' });
jest.mock('react-router', () => ({
  useParams: jest.fn().mockReturnValue({ id: 'test' }),
}));

describe('ViewCompleted component', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<ViewCompleted />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    renderer.create(<ViewCompleted />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
