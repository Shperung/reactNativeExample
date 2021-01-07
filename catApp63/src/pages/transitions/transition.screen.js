import React from 'react';
import {SafeAreaView, Button, View, Text, ScrollView} from 'react-native';

// components
import AvatarBlock from '../../avatar/avatar.block.js';

// helpers
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../../app/mixins.js';

// styles
import styles from './transition.screen.style.js';

const TransitionScreen = (props) => {
  const {navigation, route} = props;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        pagingEnabled
        scrollEventThrottle={16}
        horizontal
        style={styles.scrollView}>
        <View style={styles.avatarVrap}>
          <AvatarBlock size={DEVICE_WIDTH - 32} />
        </View>
        <View style={styles.avatarVrap}>
          <AvatarBlock size={DEVICE_WIDTH - 32} />
        </View>
        <View style={styles.avatarVrap}>
          <AvatarBlock size={DEVICE_WIDTH - 32} />
        </View>
        <View style={styles.avatarVrap}>
          <AvatarBlock size={DEVICE_WIDTH - 32} />
        </View>
        <View style={styles.avatarVrap}>
          <AvatarBlock size={DEVICE_WIDTH - 32} />
        </View>
        <View style={styles.avatarVrap}>
          <AvatarBlock size={DEVICE_WIDTH - 32} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransitionScreen;
