import React, {useState, useEffect} from 'react';
import {Easing, Animated, View, Text, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';

// assets
import AvatarImage from '../app/img/avatar.jpg';

// components
import AvatarBlock from '../avatar/avatar.block';

// styles
import styles from './info.block.style';

const InfoBlock = (props) => {
  const {
    navigation,
    onPressCallback,
    to,
    title = 'Lorem Ipsum',
    text = 'Lorem ipsum dolor sit amet',
    index,
  } = props;
  const [transitionYTopDelay] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(transitionYTopDelay, {
        toValue: 1,
        duration: 800,
        dalay: 1000 * (index + 1),
        useNativeDriver: true,
        easing: Easing.sin,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.block,
        index && {
          transform: [
            {
              translateY: transitionYTopDelay.interpolate({
                inputRange: [0, 1],
                outputRange: [16 * (index + 1) * 2, 0],
              }),
            },
          ],
        },
      ]}>
      <TouchableOpacity
        style={styles.blockButton}
        onPress={() =>
          navigation && to
            ? navigation.navigate(to)
            : onPressCallback
            ? onPressCallback()
            : null
        }>
        <AvatarBlock />
        <View style={styles.infoTextBlock}>
          <Text style={styles.textHeading}>{title}</Text>
          <Text numberOfLines={1} style={styles.textSmall}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default InfoBlock;
