import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './charts.screen.style.js';

const ChartsScreen = props => {
  const {navigation, route} = props;

  const handleAmimated = () => {
    console.log('handleAmimated');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.aimatedBtm} onPress={handleAmimated}>
        <Text style={styles.speedBtnText}>Animated</Text>
      </TouchableOpacity>
      <View style={styles.aimatedBlock} />
    </View>
  );
};

export default ChartsScreen;
