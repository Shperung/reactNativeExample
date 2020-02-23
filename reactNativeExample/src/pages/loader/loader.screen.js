import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LottieView from 'lottie-react-native';

const LoaderScreen = props => {
  const {navigation, route} = props;

  return (
    <View>
      <LottieView
        source={require('../../app/json/rainbow-cat-remix.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoaderScreen;
