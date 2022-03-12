import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Navigation from './src/navigation';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config)

function App() {
  //Auth.signOut()
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
});

export default App