/**
 * @format
 */

import React from 'react';
// import ReactTestRenderer from 'react-test-renderer';
import App from '../../App';
import { render, screen } from '@testing-library/react-native';

describe('<App />', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  test('Should renders correctly',  () => {
    render(<App />)
  });

  test('Should renders snapshot',  () => {
    const { toJSON } = render(<App />);

    expect(toJSON()).toMatchSnapshot();
  });

   test('Should render Welcome text ',  () => {
    render(<App />);

    screen.getByText('Welcome to React Native!');
  });
});
