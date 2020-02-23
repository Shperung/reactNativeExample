import React, {useState, useEffect, useLayoutEffect, useContext} from 'react';
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

// assets
import FlyImage from '../../app/img/fly.jpg';

// constants
import mixins, {DEVICE_WIDTH, DARK_THEME} from '../../app/mixins.js';
import {DC_WIDTH} from '../../app/constants';

// components
import InfoBlock from '../../decoration/info.block';
import AvatarBlock from '../../avatar/avatar.block';
import ThemeContext from '../../app/theme-context';

// styles
import styles from './main.screen.style.js';

export const WIDTH_MAX = DEVICE_WIDTH * 2;
export const WIDTH_MIN = DEVICE_WIDTH;

const outputRangeOffset = (-DC_WIDTH / Math.PI) * 1.2;

const MainScreen = props => {
  const {navigation} = props;
  const [scrollViewValue, setScrollViewValue] = useState(new Animated.Value(0));
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const {theme} = useContext(ThemeContext);

  const isDark = theme === DARK_THEME;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scrollY, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.sin,
      }),
    ]).start();
  }, []);

  useLayoutEffect(() => {
    Animated.timing(scrollViewValue, {
      toValue: 0,
      easing: Easing.sin,
    }).start();
  }, [scrollViewValue]);

  const changeTransitionYTop = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [-80, 0],
  });

  const changeOpacityYTop = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  const scollWidth = scrollViewValue.interpolate({
    inputRange: [0, DEVICE_WIDTH],
    outputRange: [0, -DEVICE_WIDTH],
    extrapolate: 'clamp',
  });

  const imageIndent = scrollViewValue.interpolate({
    inputRange: [0, DC_WIDTH],
    outputRange: [outputRangeOffset, -16],
    extrapolate: 'clamp',
  });

  const scrollBgc = scrollViewValue.interpolate({
    inputRange: [0, DEVICE_WIDTH],
    outputRange: isDark
      ? [mixins.color.greenDark, mixins.color.green]
      : [mixins.color.green, mixins.color.greenDark],
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
          <Animated.View
            style={[
              styles.banerItem,
              styles.banerItemFirst,
              {
                transform: [{translateY: changeTransitionYTop}],
                opacity: changeOpacityYTop,
              },
            ]}>
            <View style={styles.bioWrap}>
              <AvatarBlock size={72} />
              <View style={styles.bioTextWrap}>
                <Text style={styles.bio}>
                  <Text style={styles.bioBold}>Name</Text> - Murzik
                </Text>
                <Text style={styles.bio}>
                  <Text style={styles.bioBold}>Age</Text> - 1
                </Text>
                <Text style={styles.bio}>
                  <Text style={styles.bioBold}>Weight</Text> - 1.5kg
                </Text>
                <Text style={styles.bio}>
                  <Text style={styles.bioBold}>Color</Text> - black
                </Text>
                <Text style={styles.bio}>
                  <Text style={styles.bioBold}>Legs</Text> - 4
                </Text>
                <Text style={styles.bio}>
                  <Text style={styles.bioBold}>Tail</Text> - 1
                </Text>
              </View>
            </View>
          </Animated.View>
          <Animated.View style={styles.banerItem}>
            <Animated.View
              style={[
                styles.banerImgWrap,
                {transform: [{translateX: imageIndent}]},
              ]}>
              <Image style={styles.banerImg} source={FlyImage} />
            </Animated.View>
          </Animated.View>
        </ScrollView>
        <Animated.View
          style={[styles.tabsWrap, {transform: [{translateX: scollWidth}]}]}>
          <View style={styles.tabs}>
            {[...new Array(3)].map((item, i) => (
              <InfoBlock key={`a-${i}`} index={i} />
            ))}
          </View>

          <View style={styles.tabs}>
            {[...new Array(3)].map((item, i) => (
              <InfoBlock key={i} index={i} />
            ))}
          </View>
        </Animated.View>
      </ScrollView>
    </Animated.View>
  );
};

export default MainScreen;
