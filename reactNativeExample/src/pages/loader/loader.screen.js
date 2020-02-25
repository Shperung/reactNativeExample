import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './loader.screen.style.js';

const LoaderScreen = props => {
  const {navigation, route} = props;

  return (
    <View style={styles.container}>
      <ScrollView
        snapToOffsets={[1]}
        style={[styles.scrollViewHorizontal]}
        scrollEventThrottle={16}
        alwaysBounceHorizontal
        horizontal>
        <LottieView
          style={styles.lottie}
          source={require('../../app/json/rainbow-cat-remix.json')}
          autoPlay
          loop
        />
        <LottieView
          style={styles.lottie}
          source={require('../../app/json/kicking-cats.json')}
          autoPlay
          loop
        />
      </ScrollView>
    </View>
  );
};

export default LoaderScreen;
