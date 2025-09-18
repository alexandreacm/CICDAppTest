import React from 'react';
import { render } from '@testing-library/react-native';
import StatusBar from '../../src/components/StatusBar';

describe('<StatusBar />', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  test('Should renders correctly',  () => {
    render(<StatusBar isDarkMode={false} />);
  });

  test('Should renders snapshot',  () => {
    const { toJSON } = render(<StatusBar isDarkMode={false} />);

    expect(toJSON()).toMatchSnapshot();
  });



  test('Should renders correctly with dark mode',  () => {
    render(<StatusBar isDarkMode={true} />);
  });
});
