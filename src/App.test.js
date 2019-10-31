import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

describe('My work', () => {
  test('renders without crashing is good 123', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('also 234', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})



