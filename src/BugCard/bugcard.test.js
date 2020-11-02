import React from 'react';
import ReactDOM from 'react-dom';
import Card from './bugcard';
import renderer from 'react-test-renderer';

describe('Card component', () => {
  it('renders without crashing', () => {
    ReactDOM.render(
      <Card bug={{ name: 'test', priority: '1', version: 'v1.0' }} />,
      document.createElement('div')
    );
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    renderer
      .create(<Card bug={{ name: 'test', priority: '1', version: 'v1.0' }} />)
      .toJSON();
    expect(renderer).toMatchSnapshot();
  });
  it('renders the UI as expected', () => {
    renderer
      .create(<Card bug={{ name: 'test', priority: '1', version: 'v1.0' }} />)
      .toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
