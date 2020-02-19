import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

const LoaderScreen = props => {
  const {navigation, route} = props;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LoaderScreen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
};

export default LoaderScreen;
