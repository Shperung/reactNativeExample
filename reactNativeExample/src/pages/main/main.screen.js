import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  Easing,
  View,
  Text,
  Animated,
  ScrollView,
} from 'react-native';

// icons
import ClosedIcon from '../../svg/assets/closed.svg';

// constants
import mixins, {DEVICE_WIDTH} from '../../app/mixins.js';

// components
import InfoBlock from '../../decoration/info.block';

// styles
import styles from './main.screen.style.js';

export const WIDTH_MAX = DEVICE_WIDTH * 2;
export const WIDTH_MIN = DEVICE_WIDTH;

const MainScreen = props => {
  const {navigation} = props;
  const [scrollViewValue, setScrollViewValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(scrollViewValue, {
      toValue: 0,
      //useNativeDriver: true,
      easing: Easing.sin,
    }).start();
  }, [scrollViewValue]);

  const scollWidth = scrollViewValue.interpolate({
    inputRange: [0, DEVICE_WIDTH],
    outputRange: [0, -DEVICE_WIDTH],
    extrapolate: 'clamp',
  });

  const imageIndent = scrollViewValue.interpolate({
    inputRange: [0, 300],
    outputRange: [(-300 / Math.PI) * 2, 0],
    extrapolate: 'clamp',
  });

  const scrollBgc = scrollViewValue.interpolate({
    inputRange: [0, DEVICE_WIDTH],
    outputRange: [mixins.color.tomato, mixins.color.yellow],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.container, {backgroundColor: scrollBgc}]}>
      <ScrollView>
        <ScrollView
          snapToOffsets={[1]}
          style={[styles.scrollViewHorizontal]}
          scrollEventThrottle={16}
          alwaysBounceHorizontal
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollViewValue}}},
          ])}
          horizontal>
          <View style={styles.banerItem}>
            <Text>
              <ClosedIcon width={26} height={26} fill="green" />
              Клубна карта
            </Text>
          </View>
          <View style={styles.banerItem}>
            <Animated.View
              style={[
                styles.banerImgWrap,
                {transform: [{translateX: imageIndent}]},
              ]}>
              <Image
                style={styles.banerImg}
                source={{
                  uri:
                    'https://99px.ru/sstorage/53/2016/12/tmb_186070_6870.jpg',
                }}
              />
            </Animated.View>
          </View>
        </ScrollView>
        <Animated.View
          style={[styles.tabsWrap, {transform: [{translateX: scollWidth}]}]}>
          <View style={styles.tabs}>
            <InfoBlock />
            <InfoBlock />
            <InfoBlock />
          </View>

          <View style={styles.tabs}>
            <InfoBlock />
            <InfoBlock />
            <InfoBlock />
          </View>
        </Animated.View>
      </ScrollView>
    </Animated.View>
  );
};

export default MainScreen;
