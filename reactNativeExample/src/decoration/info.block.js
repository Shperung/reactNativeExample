import React from 'react';
import {SafeAreaView, Image, Button, View, Text, StatusBar} from 'react-native';

// assets
import AvatarImage from '../app/img/avatar.jpg';

// styles
import styles from './info.block.style';

const InfoBlock = () => {
  return (
    <View>
      <Image style={styles.avatarImg} source={AvatarImage} />
      <View>
        <Text>Lorem Ipsum</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      </View>
    </View>
  );
};

export default InfoBlock;
