import React from 'react';
import {Image, Animated, View, Text} from 'react-native';

// assets
import AvatarImage from '../app/img/avatar.jpg';
import AvatarImage2 from '../app/img/avatar2.jpg';
import AvatarImage3 from '../app/img/avatar3.jpg';
import AvatarImage4 from '../app/img/avatar4.jpg';

// styles
import styles from './avatar.block.style';

const avatars = [AvatarImage, AvatarImage2, AvatarImage3, AvatarImage4];

const AvatarBlock = () => {
  return (
    <Image
      style={styles.avatarImg}
      source={avatars[Math.floor(Math.random() * avatars.length)]}
    />
  );
};

export default AvatarBlock;
