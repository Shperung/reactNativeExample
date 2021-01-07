/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import * as Progress from 'react-native-progress';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Progress.Pie style={styles.progress} progress={0.4} size={50} />
        <Progress.Pie
          style={styles.progress}
          progress={0.9}
          size={50}
          animated
          color="green"
        />
        <Progress.Pie
          style={styles.progress}
          progress={0.9}
          size={50}
          animated
          color="green"
          unfilledColor="yellow"
        />
        <Progress.Pie
          style={styles.progress}
          progress={0.4}
          size={50}
          indeterminate={true}
          color="red"
        />
        <Progress.Circle
          style={styles.progress}
          size={50}
          indeterminate={true}
        />
        <Progress.Circle
          style={styles.progress}
          size={50}
          indeterminate={true}
          indeterminateAnimationDuration={3000}
        />
        <Progress.Circle
          style={styles.progress}
          size={50}
          indeterminate={true}
          progress={0.2}
          color="green"
          indeterminateAnimationDuration={3000}
        />
        <Progress.Circle
          style={styles.progress}
          size={50}
          progress={0.9}
          color="green"
          borderWidth={0}
          animated
        />
        <Progress.Circle
          style={styles.progress}
          size={80}
          progress={0.9}
          color="green"
          borderWidth={0}
          animated
          strokeCap="round"
          thickness={10}
        />
        <Progress.Circle
          style={styles.progress}
          size={80}
          progress={0.9}
          color="blue"
          borderWidth={0}
          animated
          strokeCap="round"
          thickness={10}
          // showsText
          allowFontScaling
        />
        <Progress.Circle
          style={styles.progress}
          size={80}
          progress={0.8}
          color="red"
          borderWidth={0}
          animated
          direction="counter-clockwise"
          strokeCap="round"
          thickness={10}
          // showsText
          allowFontScaling
          duration={3000}
        />
        <Progress.CircleSnail
          style={styles.progress}
          size={80}
          color={['red', 'green', 'blue']}
        />
        <Progress.CircleSnail
          style={styles.progress}
          size={90}
          progress={1}
          thickness={10}
          color={['red', 'green', 'blue']}
        />
        <Progress.CircleSnail
          style={styles.progress}
          size={90}
          progress={1}
          thickness={10}
          color={['blue']}
          strokeCap="square"
          //hidesWhenStopped={false}
          duration={4000}
          spinDuration={1}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 60,
  },
  progress: {
    margin: 16,
  },
});

export default App;
