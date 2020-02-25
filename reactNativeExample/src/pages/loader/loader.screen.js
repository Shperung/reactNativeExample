import React, {useState} from 'react';
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
  const [speed, setSpeed] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Speed - {speed}</Text>
      <View style={styles.btnWrap}>
        <TouchableOpacity style={styles.speedBtn} onPress={() => setSpeed(0)}>
          <Text style={styles.speedBtnText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speedBtn} onPress={() => setSpeed(0.2)}>
          <Text style={styles.speedBtnText}>0.2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speedBtn} onPress={() => setSpeed(0.6)}>
          <Text style={styles.speedBtnText}>0.6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speedBtn} onPress={() => setSpeed(1)}>
          <Text style={styles.speedBtnText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speedBtn} onPress={() => setSpeed(2)}>
          <Text style={styles.speedBtnText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speedBtn} onPress={() => setSpeed(3)}>
          <Text style={styles.speedBtnText}>3</Text>
        </TouchableOpacity>
      </View>
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
          speed={speed}
        />
        <LottieView
          style={styles.lottie}
          source={require('../../app/json/kicking-cats.json')}
          autoPlay
          loop
          speed={speed}
        />
      </ScrollView>
    </View>
  );
};

export default LoaderScreen;
