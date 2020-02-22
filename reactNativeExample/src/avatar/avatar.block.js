import React from 'react';
import {Image, Animated, View, Text} from 'react-native';

// assets
import AvatarImage from '../app/img/avatar.jpg';
import AvatarImage2 from '../app/img/avatar2.jpg';
import AvatarImage3 from '../app/img/avatar3.jpg';
import AvatarImage4 from '../app/img/avatar4.jpg';
import AvatarImage5 from '../app/img/avatar5.jpg';

// styles
import styles from './avatar.block.style';

const avatars = [
  AvatarImage,
  AvatarImage2,
  AvatarImage3,
  AvatarImage4,
  AvatarImage5,
];

const AvatarBlock = props => {
  const {size = 52} = props;
  return (
    <Image
      style={[styles.avatarImg, {width: size, height: size}]}
      source={avatars[Math.floor(Math.random() * avatars.length)]}
    />
  );
};

export default AvatarBlock;
