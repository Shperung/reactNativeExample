import React, {useState} from 'react';
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

// styles
import styles from './main.screen.style.js';

const MainScreen = props => {
  const {navigation} = props;
  const [scrollViewValue, setScrollViewValue] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScrollView
          horizontal
          snapToOffsets={[1]}
          //disableScrollViewPanResponder
          style={styles.scrollViewHorizontal}
          alwaysBounceHorizontal
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: setScrollViewValue}}},
          ])}>
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
        <View style={styles.tabsWrap}>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;
