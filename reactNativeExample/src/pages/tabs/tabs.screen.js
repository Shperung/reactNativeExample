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
import ThemeContext from '../../app/theme-context';

// styles
import styles from './tabs.screen.style';

const tabArr = [
  {
    unique: 'item1',
    label: 'Item 1',
  },
  {
    unique: 'item2',
    label: 'Item 2',
  },
  {
    unique: 'item3',
    label: 'Item 3',
  },
  {
    unique: 'item4',
    label: 'Item 4',
  },
];
const TabScreen = props => {
  const {navigation, route} = props;
  const {theme, toggleTheme} = useContext(ThemeContext);
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
      }).start();
    } else {
      setActiveTab(tabUnique);
      Animated.timing(animatedTab, {
        toValue: 1,
        duration: 200,
        easing: Easing.sin,
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
        <Text style={[styles.contentText, styles[`contentText${theme}`]]}>
          Active tab - ({activeTab}). Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
};

export default TabScreen;
