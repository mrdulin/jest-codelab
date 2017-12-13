import React from 'react';
import ReactDOM from 'react-dom';
import App from './';

describe('App', () => {
  it('renders without crashing', () => {
    window.alert = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(window.alert).toBeCalledWith('haha');
    ReactDOM.unmountComponentAtNode(div);
  });
});
