import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  Button,
  Image,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');
import video from './video/cat.mp4';

export default function VideoBlock() {
  const [isPlay, setIsPlay] = useState(false);

  const handlePress = () => {
    setIsPlay(!isPlay);
  };

  return (
    <View style={styles.container}>
      <Video
        source={video} // the video file
        paused={false} // make it start
        style={styles.backgroundVideo} // any style you want
        repeat={true} // make it a loop
        paused={!isPlay}
      />
      <View>
        <Button title={isPlay ? 'STOP' : 'PLAY'} onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    width,
    height: 300,
  },
  backgroundVideo: {
    width,
    height: 220,
  },
});
