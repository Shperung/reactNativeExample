import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// constants
import mixins, {LIGHT_THEME, DARK_THEME, IS_IOS} from '../app/mixins';

// helpers
import bezier from '../helpers/bezier-easing.js';
import ThemeContext from '../context/theme-context';

// styles
import styles from './animations.styles.js';

let intreval = null;
const tick = 1000 / 60; // 1секунда/60герц = 16.6 міллисекунд проходе  заміна кадра. за 16мс і кадр
// час анімації
const duration = 1000;
// ізінг один з цих https://easings.net/ru
const easeInOutSine = bezier(0.445, 0.05, 0.55, 0.95);
const easeInOutBack = bezier(0.68, -0.55, 0.265, 1.55);
// висота для анімації
const height = 450;

const AnimationsInterval = (props) => {
  const [animatedHeight, setAnimatedHeight] = useState(0);
  const {theme} = useContext(ThemeContext);
  const isDark = theme === DARK_THEME;

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
      <TouchableOpacity
        style={[styles.aimatedBtm, styles[`aimatedBtm${theme}`]]}
        onPress={handleAmimated}>
        <Text style={[styles.speedBtnText, styles[`speedBtnText${theme}`]]}>
          Animated
        </Text>
      </TouchableOpacity>
      <View
        style={[
          styles.aimatedBlock,
          styles[`aimatedBlock${theme}`],
          {height: animatedHeight},
        ]}
      />
    </View>
  );
};

export default AnimationsInterval;
