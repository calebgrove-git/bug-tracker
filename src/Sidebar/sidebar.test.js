import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './sidebar';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';
const spy = jest.spyOn(redux, 'useDispatch');
spy.mockReturnValue({ username: 'test' });
const spy2 = jest.spyOn(redux, 'useSelector');
spy2.mockReturnValue({ auth: 'test' });

describe('Card component', () => {
  it('renders without crashing', () => {
    ReactDOM.render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
      document.createElement('div')
    );
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    renderer
      .create(
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      )
      .toJSON();
    expect(renderer).toMatchSnapshot();
  });
  it('renders the UI as expected', () => {
    renderer
      .create(
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      )
      .toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
