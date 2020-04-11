import React, {useState, useContext, useEffect, useLayoutEffect} from 'react';
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
import mixins, {
  DEVICE_WIDTH,
  DARK_THEME,
  IS_IOS,
  DEVICE_HEIGHT,
} from '../../app/mixins';
import {avatars} from '../../avatar/avatar.block.js';

// components
import ThemeContext from '../../app/theme-context';
import AvatarBlock from '../../avatar/avatar.block';

// icon
import Grid2 from '../../svg/assets/grid2.svg';
import Grid3 from '../../svg/assets/grid3.svg';
import Closed from '../../svg/assets/closed.svg';

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
const imgWidth2 = DEVICE_WIDTH / 2 - 24;
const imgWidth3 = DEVICE_WIDTH / 3 - 21;

const GalleryScreen = props => {
  const {navigation, route} = props;
  const {theme} = useContext(ThemeContext);
  const isDark = theme === DARK_THEME;

  const [selectedTab, setSelectedTab] = useState(TILE);
  const [numColumns, setNumColumns] = useState(2);
  const [zoomItem, setZoomItem] = useState(null);
  const [imgSize, setImgSize] = useState(imgWidth2);
  const [zoomAnimated, setZoomAnimated] = useState(new Animated.Value(0));
  const [zoomLocation, setZoomLocation] = useState([]);

  const isTile = selectedTab === TILE;
  const isGrid = selectedTab === GRID;

  const animatedOptions = {
    easing: Easing.sin,
    duration: 600,
  };

  const clearSizes = () => {
    setZoomItem(null);
    setZoomLocation([]);
  };

  useEffect(() => {
    if (isTile) {
      setNumColumns(2);
      setImgSize(imgWidth2);
    } else {
      setNumColumns(3);
      setImgSize(imgWidth3);
    }
    clearSizes();
  }, [selectedTab]);

  useLayoutEffect(() => {
    Animated.timing(zoomAnimated, {
      toValue: 1,
      ...animatedOptions,
    }).start();
  }, [zoomItem, zoomLocation]);

  const zoomWidth = zoomAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [imgSize, DEVICE_WIDTH],
  });

  const zoomHeight = zoomAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [imgSize, DEVICE_HEIGHT],
  });

  const zoomleft = zoomAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [zoomLocation[0] || 0, 0],
  });

  const zoomTop = zoomAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [zoomLocation[1] || 0, 0],
  });

  const handlePressCard = (e, item) => {
    setZoomItem(item);

    setZoomLocation([
      e.nativeEvent.pageX - e.nativeEvent.locationX + 8,
      e.nativeEvent.pageY - e.nativeEvent.locationY - 48,
    ]);
  };

  const handleCloseZoom = () => {
    // інямую назад і чистю
    Animated.timing(zoomAnimated, {
      toValue: 0,
      ...animatedOptions,
    }).start(() => clearSizes());
  };

  return (
    <React.Fragment>
      {zoomItem ? (
        <Animated.View
          style={[
            styles.zoomCard,
            {
              width: zoomWidth,
              height: zoomHeight,
              // width: imgSize,
              // height: imgSize,
              // left: zoomLocation[0] || 0,
              // top: zoomLocation[1] || 0,
              left: zoomleft,
              top: zoomTop,
            },
          ]}>
          <TouchableOpacity style={[styles.closeBtn]} onPress={handleCloseZoom}>
            <Closed width={20} height={20} fill={mixins.color.blueDark} />
          </TouchableOpacity>
          <Image style={[styles.listImg]} source={zoomItem.img} />
          {/*} <Text style={[styles.zoomItemCardHeader]}>{zoomItem.title}</Text>
          <Text style={[styles.zoomItemCardText]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ea
            illo laborum deleniti suscipit quisquam, numquam fugiat magnam ut
            tempore iste distinctio, necessitatibus in rerum. Alias excepturi
            cumque illum magnam.
          </Text>*/}
        </Animated.View>
      ) : null}
      <View style={[styles.container, styles[`container${theme}`]]}>
        <View style={styles.headingWrap}>
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
              {!zoomItem || zoomItem.id !== item.id ? (
                <TouchableOpacity
                  style={[styles.cardBtn]}
                  onPress={e => handlePressCard(e, item)}
                />
              ) : null}
            </View>
          )}
        />
      </View>
    </React.Fragment>
  );
};

export default GalleryScreen;
