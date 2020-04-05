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

// icon
import CatIcon from '../../svg/assets/cat.svg';

// styles
import styles from './gallery.screen.screen.js';

const TILE = 'TILE';
const GRID = 'GRID';

const GalleryScreen = props => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const isDark = theme === DARK_THEME;

  const [selectedTab, setSelectedTab] = useState(TILE);

  const isTile = selectedTab === TILE;
  const isGrid = selectedTab === GRID;

  return (
    <View style={[styles.container, styles[`container${theme}`]]}>
      <View style={[styles.heading, styles[`heading${theme}`]]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setSelectedTab(TILE)}
          style={[styles.headingBtn, styles.headingBtnFirst]}>
          <CatIcon
            fill={isTile ? mixins.color.white : mixins.color.white02}
            height={32}
            width={32}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setSelectedTab(GRID)}
          style={[styles.headingBtn, styles.headingBtnSecond]}>
          <CatIcon
            fill={isGrid ? mixins.color.white : mixins.color.white02}
            height={32}
            width={32}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GalleryScreen;
