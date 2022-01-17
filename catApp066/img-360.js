import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  Button,
  Image,
  Dimensions,
} from 'react-native';
import _ from 'lodash';
import Image360Viewer from '@hauvo/react-native-360-image-viewer';
const {width, height} = Dimensions.get('window');
const images = _.reverse([
  require(`./img360/iris-1.jpg`),
  require(`./img360/iris-2.jpg`),
  require(`./img360/iris-3.jpg`),
  require(`./img360/iris-4.jpg`),
  require(`./img360/iris-5.jpg`),
  require(`./img360/iris-6.jpg`),
  require(`./img360/iris-7.jpg`),
  require(`./img360/iris-8.jpg`),
  require(`./img360/iris-9.jpg`),
  require(`./img360/iris-10.jpg`),
  require(`./img360/iris-11.jpg`),
  require(`./img360/iris-12.jpg`),
  require(`./img360/iris-13.jpg`),
  require(`./img360/iris-14.jpg`),
  require(`./img360/iris-15.jpg`),
  require(`./img360/iris-16.jpg`),
  require(`./img360/iris-17.jpg`),
  require(`./img360/iris-18.jpg`),
  require(`./img360/iris-19.jpg`),
  require(`./img360/iris-20.jpg`),
  require(`./img360/iris-21.jpg`),
  require(`./img360/iris-22.jpg`),
  require(`./img360/iris-23.jpg`),
  require(`./img360/iris-24.jpg`),
  require(`./img360/iris-25.jpg`),
  require(`./img360/iris-26.jpg`),
  require(`./img360/iris-27.jpg`),
  require(`./img360/iris-28.jpg`),
  require(`./img360/iris-29.jpg`),
  require(`./img360/iris-30.jpg`),
  require(`./img360/iris-31.jpg`),
  require(`./img360/iris-32.jpg`),
  require(`./img360/iris-33.jpg`),
  require(`./img360/iris-34.jpg`),
  require(`./img360/iris-35.jpg`),
  require(`./img360/iris-36.jpg`),
]);

const images2 = _.reverse([
  require(`./img360_1/IMG_1277.jpg`),
  require(`./img360_1/IMG_1278.jpg`),
  require(`./img360_1/IMG_1279.jpg`),
  require(`./img360_1/IMG_1280.jpg`),
  require(`./img360_1/IMG_1281.jpg`),
  require(`./img360_1/IMG_1282.jpg`),
  require(`./img360_1/IMG_1283.jpg`),
  require(`./img360_1/IMG_1283.jpg`),
  require(`./img360_1/IMG_1284.jpg`),
  require(`./img360_1/IMG_1285.jpg`),
  require(`./img360_1/IMG_1286.jpg`),
  require(`./img360_1/IMG_1289.jpg`),
  require(`./img360_1/IMG_1290.jpg`),
  require(`./img360_1/IMG_1291.jpg`),
  require(`./img360_1/IMG_1292.jpg`),
  require(`./img360_1/IMG_1293.jpg`),
  require(`./img360_1/IMG_1294.jpg`),
  require(`./img360_1/IMG_1295.jpg`),
  require(`./img360_1/IMG_1296.jpg`),
  require(`./img360_1/IMG_1297.jpg`),
  require(`./img360_1/IMG_1299.jpg`),
  require(`./img360_1/IMG_1300.jpg`),
  require(`./img360_1/IMG_1301.jpg`),
  require(`./img360_1/IMG_1302.jpg`),
  require(`./img360_1/IMG_1303.jpg`),
  require(`./img360_1/IMG_1304.jpg`),
  require(`./img360_1/IMG_1305.jpg`),
  require(`./img360_1/IMG_1306.jpg`),
  require(`./img360_1/IMG_1307.jpg`),
  require(`./img360_1/IMG_1308.jpg`),
  require(`./img360_1/IMG_1309.jpg`),
  require(`./img360_1/IMG_1310.jpg`),
  require(`./img360_1/IMG_1311.jpg`),
  require(`./img360_1/IMG_1312.jpg`),
  require(`./img360_1/IMG_1313.jpg`),
  require(`./img360_1/IMG_1314.jpg`),
  require(`./img360_1/IMG_1315.jpg`),
  require(`./img360_1/IMG_1316.jpg`),
  require(`./img360_1/IMG_1317.jpg`),
  require(`./img360_1/IMG_1318.jpg`),
  require(`./img360_1/IMG_1319.jpg`),
  require(`./img360_1/IMG_1320.jpg`),
  require(`./img360_1/IMG_1321.jpg`),
  require(`./img360_1/IMG_1322.jpg`),
  require(`./img360_1/IMG_1323.jpg`),
]);

console.log('%c ||||| images', 'color:yellowgreen;border:1px solid', images);

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Img360() {
  const [index, setIndex] = useState(0);

  useInterval(() => {
    // Your custom logic here
    if (index >= images2.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 60);

  console.log('%c --- index', 'color:green', index);
  // console.log('%c --- width', 'color:green', width);

  return (
    <View style={styles.container}>
      {/*{<Image360Viewer srcset={images2} width={width} height={width} />}*/}
      {/*<Image source={images2[index]} style={[{width, height: width}]} />*/}
      {images2.map((img, i) => (
        <Image
          key={`${img}${i}`}
          source={img}
          style={[styles.image, {opacity: index === i ? 1 : 0}]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    width,
    height: width,
  },
  image: {
    opacity: 0,
    position: 'absolute',
    resizeMode: 'cover',
    top: 0,
    left: 0,
    width,
    height: width,
  },
});
