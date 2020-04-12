import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';

const TransitionScreen = props => {
  const {navigation, route} = props;

  return (
    <SafeAreaView>
      <Text>Transition Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TransitionScreen;
