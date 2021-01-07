import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

enableScreens();

// screen
import MainScreen from './screens/main/main.screen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      // глобально для Stack.Navigator
      headerStyle: {
        backgroundColor: '#0d1117',
      },
      headerTintColor: '#c9d1d9',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={MainScreen}
      options={{
        title: 'Main',
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          background: '#0d1117',
          card: '#161b22',
          text: '#c9d1d9',
          border: '#30363d',
        },
      }}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
