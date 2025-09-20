import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import StatusBar from './src/components/StatusBar';
import { useColorScheme } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  //Added new comment here
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar isDarkMode={isDarkMode} />
      <HomeScreen isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
}

export default App;
