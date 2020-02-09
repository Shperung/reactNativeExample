import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

const MainScreen = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MainScreen</Text>
      <Button title="Charts" onPress={() => navigation.navigate('Charts')} />
    </View>
  );
};

export default MainScreen;
