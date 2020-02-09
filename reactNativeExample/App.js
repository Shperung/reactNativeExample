import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

// screens
import MainScreen from './src/pages/main/main.screen';
import ChartsScreen from './src/pages/charts/charts.screen';

const Stack = createStackNavigator();

enableScreens();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Charts" component={ChartsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
