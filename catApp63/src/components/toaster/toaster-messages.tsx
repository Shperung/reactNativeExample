import React, {useState, useEffect, useMemo, useContext, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PanResponder,
  Animated,
  Easing,
} from 'react-native';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

// helpers
import bezier from '../../helpers/bezier-easing';

// context
import ToasterContext from '../../context/toaster-context';

// constants
import mixins, {
  ORANGE_GRADIENT,
  BLUE_GRADIENT,
  GREEN_GRADIENT,
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
} from '../../app/mixins';

// components
import ProgressBlock from './progress.block';

// styles
import styles from './toaster-messages.styles';

const DURATION = 300;
const INDENT_MULTIPLIER = 12;
const SCALE_DIVIDER = 30;
const LIFE_TIME = 5000;

const MAX_VISIBLE_TOSTS = 3;

// максимальна кількість рядків заголовка
const MAX_HEADER_LINES = 5;

// максимальна кількість рядків тексту
const MAX_TEXT_LINES = Math.round(DEVICE_HEIGHT / 2 / 16);

type Props = {
  message: any;
  index: number;
};

/***
  1. После появления тоста - он пропадает из LIFE_TIME с.
  2. При свайпе вправо, влево - тост удаляется
  3. При тапе на первый самый верхний тост:
   - останавливается таймер автоматического удаления
   - показываем максимальное количество строк заголовка и текста
***/

const Toaster = (props: Props) => {
  const {messages, removeToasterMessage} = useContext(ToasterContext);
  const {message, index} = props;
  const isError = message.type === 'error';
  const isSuccess = message.type === 'success';
  const isInfo = message.type === 'info';
  const isWarning = message.type === 'warning';
  const pan = useRef(new Animated.ValueXY()).current;
  const animated = useRef(new Animated.Value(0)).current;
  const messagesIndex = index + 1;
  const [isTap, setIsTap] = useState(false);

  const animatedDelete = (direction: 'left' | 'right') =>
    Animated.timing(pan, {
      toValue: direction === 'left' ? -DEVICE_WIDTH : DEVICE_WIDTH,
      duration: DURATION,
      useNativeDriver: true,
    }).start(() => removeToasterMessage(message.unique));

  useEffect(() => {
    let timeout = null;

    if (index === 0 && !isTap) {
      timeout = setTimeout(() => {
        // якщо користувач сам не видалив то видаляеться анімовано вліво через LIFE_TIME с.
        animatedDelete('left');
      }, LIFE_TIME);
    }

    Animated.timing(animated, {
      toValue: 1,
      duration: DURATION,
      easing: Easing.sin,
      useNativeDriver: true,
    }).start();

    return () => (timeout ? clearTimeout(timeout) : null);
  }, [index, isTap]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x}]),
      onPanResponderRelease: () => {
        if (pan.x._value > 0) {
          // drag right
          animatedDelete('right');
        } else {
          // drag left
          animatedDelete('left');
        }
        pan.flattenOffset();
      },
    }),
  ).current;

  const hendlePressTost = () => {
    if (index === 0) {
      setIsTap(true);
    }
  };

  if (index >= MAX_VISIBLE_TOSTS) return null;

  return (
    <Animated.View
      style={[
        styles.messageBlock,
        {
          zIndex: messages.length - index,
          transform: [
            {translateX: pan.x},
            {
              translateY: animated.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  (messagesIndex - 1) * INDENT_MULTIPLIER,
                  messagesIndex * INDENT_MULTIPLIER,
                ],
              }),
            },
            {
              scale: animated.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1 - (messagesIndex - 1) / SCALE_DIVIDER],
              }),
            },
          ],
        },
      ]}
      {...panResponder.panHandlers}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={hendlePressTost}
        onPressIn={hendlePressTost}>
        <LinearGradient
          colors={
            isError
              ? ORANGE_GRADIENT
              : isSuccess
              ? GREEN_GRADIENT
              : BLUE_GRADIENT
          }
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.messageGradient}
          key={message.unique}>
          <Text style={styles.icon}>
            {isError ? '🙀' : isSuccess ? '😸' : '🐈'}
          </Text>
          <View style={styles.textWrap}>
            <Text
              style={styles.heading}
              numberOfLines={isTap ? MAX_HEADER_LINES : 1}>
              {message.header ? (
                message.header
              ) : isError ? (
                <Text>Ой</Text>
              ) : isSuccess ? (
                <Text>Успіх</Text>
              ) : isInfo ? (
                <Text>Інформація</Text>
              ) : isWarning ? (
                <Text>Увага</Text>
              ) : null}
            </Text>
            <Text
              style={styles.text}
              numberOfLines={isTap ? MAX_TEXT_LINES : 1}>
              {message.message}
            </Text>
          </View>
          <ProgressBlock isProgress={index === 0} />
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function ToasterMessages() {
  const {messages, bug, success, warning, info} = useContext(ToasterContext);

  if (!messages.length) return null;

  return (
    <View style={styles.container}>
      {messages.map((message, i) => (
        <Toaster key={message.unique} message={message} index={i} />
      ))}
    </View>
  );
}
