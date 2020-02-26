import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import bezier from './bezier-easing.js';

import styles from './charts.screen.style.js';

const frameDuration = 16;
let intreval = null;
const tick = 1000 / 60; // 16.666666666666668
const timeAnimation = 200;
const frames = Math.floor(timeAnimation / tick);
const duration = 1000;
const easeInOutSine = bezier(0.445, 0.05, 0.55, 0.95);

const ChartsScreen = props => {
  const [animatedHeight, setAnimatedHeight] = useState(50);

  const handleAmimated = () => {
    if (intreval) {
      clearInterval(intreval);
    }

    let start = Date.now();

    intreval = setInterval(() => {
      let timePassed = Date.now() - start;

      if (timePassed <= duration) {
        // варіант на сінусах  const curentIndent = Math.sin((timePassed / duration) * (Math.PI / 2)) * 8;
        // варіант на ізінгові
        const curentIndent = easeInOutSine(timePassed / duration) * 450;
        // const curentIndent =
        //   Math.sin((timePassed / duration) * (Math.PI / 2)) * 8;

        // ставлю відступ анімовано
        //setIndent(curentIndent);
        setAnimatedHeight(curentIndent);
      } else {
        if (intreval) {
          clearInterval(intreval);
        }
        setAnimatedHeight(450);
        //setIndent(8);
      }
    }, frameDuration);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.aimatedBtm} onPress={handleAmimated}>
        <Text style={styles.speedBtnText}>Animated</Text>
      </TouchableOpacity>
      <View style={[styles.aimatedBlock, {height: animatedHeight}]} />
    </View>
  );
};

export default ChartsScreen;
