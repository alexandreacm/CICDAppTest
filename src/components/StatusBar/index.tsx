import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';

type Props = {
  isDarkMode: boolean;
}

const StatusBar: React.FC<Props> = ({ isDarkMode }) => {
  return (
    <RNStatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  );
};

export default StatusBar;
