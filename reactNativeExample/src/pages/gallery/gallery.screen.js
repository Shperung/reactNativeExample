import React, {useState, useContext, useEffect} from 'react';
import {
  SafeAreaView,
  Easing,
  TouchableOpacity,
  View,
  Text,
  Animated,
  FlatList,
  Image,
} from 'react-native';

// constants
import mixins, {DEVICE_WIDTH, DARK_THEME, IS_IOS} from '../../app/mixins';
import {avatars} from '../../avatar/avatar.block.js';

// components
import ThemeContext from '../../app/theme-context';
import AvatarBlock from '../../avatar/avatar.block';

// icon
import Grid2 from '../../svg/assets/grid2.svg';
import Grid3 from '../../svg/assets/grid3.svg';

// styles
import styles from './gallery.screen.screen.js';

const TILE = 'TILE';
const GRID = 'GRID';
const DATA = [...new Array(41)].map((item, i) => {
  const rand = Math.round(Math.random() * 9999);
  return {
    id: `${rand}`,
    title: `Cat - ${rand}`,
    img: avatars[Math.floor(Math.random() * avatars.length)],
  };
});

const GalleryScreen = props => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const isDark = theme === DARK_THEME;

  const [selectedTab, setSelectedTab] = useState(TILE);
  const [numColumns, setNumColumns] = useState(2);
  const [imgSize, setImgSize] = useState(DEVICE_WIDTH / 2 - 32);

  const isTile = selectedTab === TILE;
  const isGrid = selectedTab === GRID;

  useEffect(() => {
    if (isTile) {
      setNumColumns(2);
      setImgSize(DEVICE_WIDTH / 2 - 32);
    } else {
      setNumColumns(3);
      setImgSize(DEVICE_WIDTH / 3 - 32 + 6);
    }
  }, [selectedTab]);

  return (
    <View style={[styles.container, styles[`container${theme}`]]}>
      <View style={[styles.heading, styles[`heading${theme}`]]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setSelectedTab(TILE)}
          style={[styles.headingBtn, styles.headingBtnFirst]}>
          <Grid2
            fill={isTile ? mixins.color.white : mixins.color.white02}
            height={32}
            width={32}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setSelectedTab(GRID)}
          style={[styles.headingBtn, styles.headingBtnSecond]}>
          <Grid3
            fill={isGrid ? mixins.color.white : mixins.color.white02}
            height={32}
            width={32}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        numColumns={numColumns}
        key={numColumns}
        keyExtractor={item => item.id}
        style={styles.flatList}
        renderItem={({item}) => (
          <View key={item.id} style={[styles.card]}>
            <Image
              style={[styles.listImg, {width: imgSize, height: imgSize}]}
              source={item.img}
            />
            <Text style={[styles.cardText]}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default GalleryScreen;
