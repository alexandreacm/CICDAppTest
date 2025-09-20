import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import StatusBar from './src/components/StatusBar';
import { useColorScheme } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    //NEw COMMENT
    //I am here....
    //other thing bla bla bla
    //new test to push the content to main branch
    //feature-4
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar isDarkMode={isDarkMode} />
      <HomeScreen isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
}

export default App;
