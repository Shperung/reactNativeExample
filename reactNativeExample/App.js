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

const headerStyle = {
  // можливо персонально міняти любий параметр для Stack.Screen
  // headerStyle: {
  //   backgroundColor: '#f4511e',
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          // глобально для Stack.Navigator
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: 'Slider scroll', ...headerStyle}}
        />
        <Stack.Screen
          name="Charts"
          component={ChartsScreen}
          options={{title: 'Charts', ...headerStyle}}
          initialParams={{from: 'App'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
