import React from 'react';
import {Image, Animated, View, Text} from 'react-native';

// assets
import AvatarImage from '../app/img/avatar.jpg';

// styles
import styles from './info.block.style';

const InfoBlock = () => {
  return (
    <Animated.View style={styles.block}>
      <Image style={styles.avatarImg} source={AvatarImage} />
      <View>
        <Text style={styles.textHeading}>Lorem Ipsum</Text>
        <Text numberOfLines={1} style={styles.textSmall}>
          Lorem ipsum dolor sit amet
        </Text>
      </View>
    </Animated.View>
  );
};

export default InfoBlock;
