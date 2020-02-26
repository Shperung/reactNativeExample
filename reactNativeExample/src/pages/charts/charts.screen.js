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

let intreval = null;
const tick = 1000 / 60; // 1секунда/60герц = 16.6 міллисекунд проходе  заміна кадра. за 16мс і кадр
// час анімації
const duration = 1000;
// ізінг один з цих https://easings.net/ru
const easeInOutSine = bezier(0.445, 0.05, 0.55, 0.95);
const easeInOutBack = bezier(0.68, -0.55, 0.265, 1.55);
// висота для анімації
const height = 450;

const ChartsScreen = props => {
  const [animatedHeight, setAnimatedHeight] = useState(50);

  const handleAmimated = () => {
    if (intreval) {
      // на всякий випадок очищаємо
      clearInterval(intreval);
    }

    // задаємо старт анімації
    let start = Date.now();

    intreval = setInterval(() => {
      // різниці часу
      let timePassed = Date.now() - start;

      // якщо різниця часу не виходе за рамки duration то анімуємо
      if (timePassed <= duration) {
        // ділимо час що минув на загальний
        const timeDivide = timePassed / duration;
        // варіант на сінусах  const curentIndent = Math.sin((timeDivide) * (Math.PI / 2)) * height;
        // варіант на ізінгові
        const curentIndent = easeInOutBack(timeDivide) * height;

        // ставлю висоту анімовано
        setAnimatedHeight(curentIndent);
      } else {
        // коли різниця часу зрівнялася з тривалістю то чистимо інтервал і задаємо бажану висоту
        if (intreval) {
          clearInterval(intreval);
        }
        setAnimatedHeight(height);
      }
    }, tick);
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
