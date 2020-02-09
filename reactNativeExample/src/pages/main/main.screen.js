import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

// icons
import ClosedIcon from '../../svg/assets/closed.svg';

const MainScreen = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MainScreen</Text>
      {/*<ClosedIcon width={26} height={26} fill="green" />*/}
      <Button
        title="Charts"
        onPress={() =>
          navigation.navigate('Charts', {
            from: 'main',
          })
        }
      />
    </View>
  );
};

export default MainScreen;
