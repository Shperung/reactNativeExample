import React from 'react';
import {SafeAreaView, Button, View, Text} from 'react-native';

const TransitionScreen = props => {
  const {navigation, route} = props;

  return (
    <SafeAreaView style={{padding: 16}}>
      <Text>Transition Screen</Text>
      <View style={{margin: 16}}>
        <Button onPress={() => navigation.goBack()} title="Go Back" />
      </View>
    </SafeAreaView>
  );
};

export default TransitionScreen;
