import React, {useEffect, useState} from 'react';
import {Image, Animated, View, Text} from 'react-native';

import CatIcon from '../svg/assets/cat.svg';

// styles
import styles from './animations.styles';

const radius = 120;
const speed = 20;

const AnimationCircle = props => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    var f = 0;
    var s = (2 * Math.PI) / 180; //Вычислим угол
    setInterval(function() {
      // функция движения
      f += Math.sin(s); // приращение аргумента

      setLeft(radius * Math.sin(f) - 16);
      setTop(radius * Math.cos(f) - 16);
    }, speed);
  }, []);

  return (
    <View style={styles.containerCircleAnimated}>
      <View style={styles.circleAnimatedline}>
        <View style={styles.circleAnimatedItemWrap}>
          <CatIcon
            width={32}
            height={32}
            fill="#fff"
            style={[styles.circleAnimatedItem, {top, left}]}
          />
        </View>
      </View>
    </View>
  );
};

export default AnimationCircle;
