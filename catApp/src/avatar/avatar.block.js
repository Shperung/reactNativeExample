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
import AvatarImage14 from '../app/img/avatar14.jpg';
import AvatarImage15 from '../app/img/avatar15.jpg';
import AvatarImage16 from '../app/img/avatar16.jpg';
import AvatarImage17 from '../app/img/avatar17.jpg';
import AvatarImage18 from '../app/img/avatar18.jpg';
import AvatarImage19 from '../app/img/avatar19.jpg';
import AvatarImage20 from '../app/img/avatar20.png';
import AvatarImage21 from '../app/img/avatar21.jpg';
import AvatarImage22 from '../app/img/avatar22.jpg';
import AvatarImage23 from '../app/img/avatar23.jpg';
import AvatarImage24 from '../app/img/avatar24.jpg';
import AvatarImage25 from '../app/img/avatar25.jpg';
import AvatarImage26 from '../app/img/avatar26.jpg';
import AvatarImage27 from '../app/img/avatar27.jpg';
import AvatarImage28 from '../app/img/avatar28.jpg';
import AvatarImage29 from '../app/img/avatar29.jpg';
import AvatarImage30 from '../app/img/avatar30.jpg';
import AvatarImage31 from '../app/img/avatar31.jpg';
import AvatarImage32 from '../app/img/avatar32.jpg';

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
  AvatarImage14,
  AvatarImage15,
  AvatarImage16,
  AvatarImage17,
  AvatarImage18,
  AvatarImage19,
  AvatarImage20,
  AvatarImage21,
  AvatarImage22,
  AvatarImage23,
  AvatarImage24,
  AvatarImage25,
  AvatarImage26,
  AvatarImage27,
  AvatarImage28,
  AvatarImage29,
  AvatarImage30,
  AvatarImage31,
  AvatarImage32,
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
