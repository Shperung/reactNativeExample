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

  const [pressedTab, setPressedTab] = useState('');
  const [activeTab, setActiveTab] = useState('');

  const handleTab = (tabUnique, isActive) => {
    setPressedTab(tabUnique);

    if (isActive) {
      setActiveTab('');

      Animated.timing(animatedTab, {
        toValue: 0,
        easing: Easing.sin,
      }).start();
    } else {
      setActiveTab(tabUnique);

      Animated.timing(animatedTab, {
        toValue: 1,
        easing: Easing.sin,
      }).start();
    }
  };

  return (
    <View style={[styles.container, styles[`container${theme}`]]}>
      <Text style={[styles.heading, styles[`heading${theme}`]]}>
        Tab Screen
      </Text>
      {tabArr.map(tab => {
        const isActive = activeTab === tab.unique;
        const isPressed = pressedTab === tab.unique;

        const changeMargin = animatedTab.interpolate({
          inputRange: [0, 1],
          outputRange: [0, isActive ? 0 : 50],
        });

        const marginStyles = isPressed ? {} : {marginTop: changeMargin};

        return (
          <Animated.View
            key={tab.unique}
            style={[styles.item, styles[`item${theme}`], marginStyles]}>
            <TouchableOpacity
              onPress={() => handleTab(tab.unique, isActive)}
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
          </Animated.View>
        );
      })}

      <View style={styles.content}>
        <Text style={[styles.contentText, styles[`contentText${theme}`]]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
};

export default TabScreen;
