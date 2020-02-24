import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LottieView from 'lottie-react-native';

const LoaderScreen = props => {
  const {navigation, route} = props;

  return (
    <View>
      <View>
        <TouchableOpacity>
          <Text>Rainbow Cat</Text>
        </TouchableOpacity>
      </View>
      <LottieView
        source={require('../../app/json/rainbow-cat-remix.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoaderScreen;
