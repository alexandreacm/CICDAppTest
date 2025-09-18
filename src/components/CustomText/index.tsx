import React, { PropsWithChildren } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import light from '../../styles/light';
import dark from '../../styles/dark';

type Props = {
  isDarkMode: boolean;
};

const CustomText: React.FC<PropsWithChildren<Props>> = ({ children, isDarkMode }) => {
  return (
    <View>
      <Text
        style={[
          styles.text,
          { color: isDarkMode ? dark.colors.text : light.colors.text },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomText;
