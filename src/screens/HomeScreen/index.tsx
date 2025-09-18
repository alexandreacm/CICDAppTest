import React from 'react';
import { View, StyleSheet } from 'react-native';
import dark from '../../styles/dark';
import light from '../../styles/light';
import CustomText from '../../components/CustomText';

type HomeScreenProps = {
  isDarkMode: boolean;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ isDarkMode }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? dark.colors.background
            : light.colors.background,
        },
      ]}
    >
      <CustomText isDarkMode={isDarkMode}>Welcome to React Native!</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomeScreen;
