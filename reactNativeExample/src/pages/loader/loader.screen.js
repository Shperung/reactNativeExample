import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {useDarkMode} from 'react-native-dark-mode';

const LoaderScreen = props => {
  const {navigation, route} = props;
  const isDarkMode = useDarkMode();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LoaderScreen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>{isDarkMode ? 'dark' : 'light'}</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
};

export default LoaderScreen;
