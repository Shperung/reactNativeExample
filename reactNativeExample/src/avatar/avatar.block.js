import React from 'react';
import {Image, Animated, View, Text} from 'react-native';

// assets
import AvatarImage from '../app/img/avatar.jpg';
import AvatarImage2 from '../app/img/avatar2.jpg';
import AvatarImage3 from '../app/img/avatar3.jpg';
import AvatarImage4 from '../app/img/avatar4.jpg';
import AvatarImage5 from '../app/img/avatar5.jpg';
import AvatarImage6 from '../app/img/avatar6.png';
import AvatarImage7 from '../app/img/avatar7.jpg';
import AvatarImage8 from '../app/img/avatar8.png';
import AvatarImage9 from '../app/img/avatar9.jpg';
import AvatarImage10 from '../app/img/avatar10.jpg';
import AvatarImage11 from '../app/img/avatar11.jpg';
import AvatarImage12 from '../app/img/avatar12.jpg';
import AvatarImage13 from '../app/img/avatar13.jpg';

// styles
import styles from './avatar.block.style';

export const avatars = [
  AvatarImage,
  AvatarImage2,
  AvatarImage3,
  AvatarImage4,
  AvatarImage5,
  AvatarImage6,
  AvatarImage7,
  AvatarImage8,
  AvatarImage9,
  AvatarImage10,
  AvatarImage11,
  AvatarImage12,
  AvatarImage13,
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
