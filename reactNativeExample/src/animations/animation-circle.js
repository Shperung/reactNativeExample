import React, {useEffect, useState} from 'react';
import {Image, Animated, View, Text} from 'react-native';

import CatIcon from '../svg/assets/cat.svg';

// styles
import styles from './animations.styles';

let intreval = null;
const radius = 120;
const tick = 1000 / 60; // 1секунда/60герц = 16.6 міллисекунд проходе  заміна кадра. за 16мс і кадр
// початок координат
const x0 = 0;
const y0 = 0;
// розмір кота
const catSize = 32;
// зміщення проловини розміра
const offset = catSize / 2;
let f = 0;
const angle = (2 * Math.PI) / 180; // вугол

const AnimationCircle = props => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (intreval) {
      // на всякий випадок очищаємо
      clearInterval(intreval);
    }
    intreval = setInterval(() => {
      // функция движения
      f += angle; // приріст аргумента

      // зміщення по х
      setTop(x0 + radius * Math.cos(f) - offset);
      // зміщення по у, по часвоі f , проти часвої -f
      setLeft(y0 + radius * Math.sin(-f) - offset);
    }, tick);
  }, []);

  return (
    <View style={styles.containerCircleAnimated}>
      <View style={styles.circleAnimatedline}>
        <View style={styles.circleAnimatedItemWrap}>
          <CatIcon
            width={catSize}
            height={catSize}
            fill="#fff"
            style={[styles.circleAnimatedItem, {top, left}]}
          />
        </View>
      </View>
    </View>
  );
};

export default AnimationCircle;
