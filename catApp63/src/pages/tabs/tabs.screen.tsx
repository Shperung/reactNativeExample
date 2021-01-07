import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Easing,
  TouchableOpacity,
  View,
  Text,
  Animated,
} from 'react-native';

// constants
import mixins, {LIGHT_THEME, DARK_THEME, IS_IOS} from '../../app/mixins';

// components
import ThemeContext from '../../context/theme-context';
import AnimationCircle from '../../animations/animation-circle';
import AnimationsInterval from '../../animations/animations-intervar';
import AnimationProgress from '../../animations/animation-progress';

// styles
import styles from './tabs.screen.style';

const tabArr = [
  {
    unique: 'circleAnimations',
    label: 'Circle animations',
  },
  {
    unique: 'animationsInterval',
    label: 'Animations Interval',
  },
  {
    unique: 'animationsProgress',
    label: 'Animations Progress',
  },
  {
    unique: 'item4',
    label: 'Item 4',
  },
];
const TabScreen = (props) => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const isDark = theme === DARK_THEME;
  const [animatedTab, setAnimatedTab] = useState(new Animated.Value(0));

  const [activeTab, setActiveTab] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTab = (tabUnique, isActive, i) => {
    setActiveIndex(i);

    // якщо тап по тій самій кнопкі то розкривається всі таби
    if (isActive) {
      setActiveTab('');
      Animated.timing(animatedTab, {
        toValue: 0,
        duration: 200,
        easing: Easing.sin,
        useNativeDriver: false,
      }).start();
    } else {
      setActiveTab(tabUnique);
      Animated.timing(animatedTab, {
        toValue: 1,
        duration: 200,
        easing: Easing.sin,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={[styles.container, styles[`container${theme}`]]}>
      <Text style={[styles.heading, styles[`heading${theme}`]]}>
        Tab Screen
      </Text>
      <View style={styles.tabsWrap}>
        {tabArr.map((tab, i, arr) => {
          const isActive = activeTab === tab.unique;
          const isLast = i === arr.length - 1;

          // втягую вверх таби на -50 (якщо не перший)
          let outputRangeArr = [0, -50 * i];
          if (i > activeIndex) {
            outputRangeArr = [0, -50];
          }
          if (i < activeIndex) {
            outputRangeArr = [0, 0];
          }

          const changeMargin = animatedTab.interpolate({
            inputRange: [0, 1],
            outputRange: outputRangeArr,
          });

          const marginStyles = {marginTop: changeMargin};

          return (
            <Animated.View
              key={tab.unique}
              style={[
                styles.item,
                styles[`item${theme}`],
                isActive && styles.itemActive,
                marginStyles,
              ]}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => handleTab(tab.unique, isActive, i)}
                style={[styles.itemBtn, styles[`itemBtn${theme}`]]}>
                <Text style={[styles.itemText, styles[`itemText${theme}`]]}>
                  {tab.label}
                </Text>
                {isActive ? (
                  <Text style={[styles.itemText, styles[`itemText${theme}`]]}>
                    Change
                  </Text>
                ) : null}
              </TouchableOpacity>
              {!isLast && !activeTab ? (
                <View
                  style={[styles.bottomLine, styles[`bottomLine${theme}`]]}
                />
              ) : null}
            </Animated.View>
          );
        })}
      </View>

      <View style={styles.content}>
        {activeTab === 'circleAnimations' ? <AnimationCircle /> : null}
        {activeTab === 'animationsInterval' ? <AnimationsInterval /> : null}
        {activeTab === 'animationsProgress' ? <AnimationProgress /> : null}
      </View>
    </View>
  );
};

export default TabScreen;
