import React from 'react';
import { render, screen } from '@testing-library/react-native';
import HomeScreen from '../../src/screens/HomeScreen';

describe('<HomeScreen />', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  test('Should renders correctly',  () => {
    render(<HomeScreen isDarkMode={false} />);
  });

  test('Should renders snapshot',  () => {
    const { toJSON } = render(<HomeScreen isDarkMode={false} />);

    expect(toJSON()).toMatchSnapshot();
  });

   test('Should render Welcome text ',  () => {
    render(<HomeScreen isDarkMode={false}/>);

    screen.getByText('Welcome to React Native!');
  });

  test('Should renders correctly with dark mode',  () => {
    render(<HomeScreen isDarkMode={true} />);
  });
});
