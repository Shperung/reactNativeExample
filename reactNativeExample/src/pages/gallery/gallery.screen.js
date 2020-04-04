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
import styles from './gallery.screen.screen.js';

const GalleryScreen = props => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const isDark = theme === DARK_THEME;

  return (
    <View style={[styles.container, styles[`container${theme}`]]}>
      <Text style={[styles.heading, styles[`heading${theme}`]]}>
        Callery Screen
      </Text>
    </View>
  );
};

export default GalleryScreen;
