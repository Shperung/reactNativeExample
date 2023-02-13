import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

import styles from './style.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ok</Text>
      <StatusBar style='auto' />
    </View>
  );
}
