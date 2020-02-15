import React, {useState, useEffect} from 'react';
import {Easing, Animated, View, Text} from 'react-native';

// assets
import AvatarImage from '../app/img/avatar.jpg';

// components
import AvatarBlock from '../avatar/avatar.block';

// styles
import styles from './info.block.style';

const InfoBlock = ({index}) => {
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
        {
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
      <AvatarBlock />
      <View style={styles.infoTextBlock}>
        <Text style={styles.textHeading}>Lorem Ipsum</Text>
        <Text numberOfLines={1} style={styles.textSmall}>
          Lorem ipsum dolor sit amet
        </Text>
      </View>
    </Animated.View>
  );
};

export default InfoBlock;
