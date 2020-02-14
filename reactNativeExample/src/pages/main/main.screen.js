import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  Button,
  View,
  Text,
  Animated,
  ScrollView,
} from 'react-native';

// icons
import ClosedIcon from '../../svg/assets/closed.svg';

// constants
import mixins, {DEVICE_WIDTH} from '../../app/mixins.js';

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
      useNativeDriver: true,
    }).start();
  }, [scrollViewValue]);

  const scollWidth = scrollViewValue.interpolate({
    inputRange: [0, DEVICE_WIDTH],
    outputRange: [0, -DEVICE_WIDTH],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScrollView
          snapToOffsets={[1]}
          style={styles.scrollViewHorizontal}
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
            <Image
              style={styles.banerImg}
              source={{
                uri: 'https://99px.ru/sstorage/53/2016/12/tmb_186070_6870.jpg',
              }}
            />
          </View>
        </ScrollView>
        <Animated.View
          style={[
            styles.tabsWrap,
            {marginLeft: 0, transform: [{translateX: scollWidth}]},
          ]}>
          <View style={styles.tabs}>
            <View style={styles.tabLeft}>
              <Text>tabLeft</Text>
            </View>
            <View style={styles.tabLeft}>
              <Text>tabLeft</Text>
            </View>
            <View style={styles.tabLeft}>
              <Text>tabLeft</Text>
            </View>
          </View>

          <View style={styles.tabs}>
            <View style={styles.tabRight}>
              <Text>tabRight</Text>
            </View>
            <View style={styles.tabRight}>
              <Text>tabRight</Text>
            </View>
            <View style={styles.tabRight}>
              <Text>tabRight</Text>
            </View>
            <View style={styles.tabRight}>
              <Text>tabRight</Text>
            </View>
            <View style={styles.tabRight}>
              <Text>tabRight</Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;
