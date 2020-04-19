/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

enableScreens();

// screens
import SettingsScreen from './src/pages/settings/settings.screen.js';
import MainScreen from './src/pages/main/main.screen.js';
import CalleryScreen from './src/pages/gallery/gallery.screen.js';
import TabScreen from './src/pages/tabs/tabs.screen.js';

// helpers
import ThemeContext, {ThemeProvider} from './src/app/theme-context';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

// const TransitionsNavigator = () => (
//   <Stack.Navigator initialRouteName="Settings">
//     <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
//   </Stack.Navigator>
// );

const TabsNavigator = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Main" component={MainScreen} />
    <Tabs.Screen name="Callery" component={CalleryScreen} />
    <Tabs.Screen name="Tab" component={TabScreen} />
  </Tabs.Navigator>
);

const App: () => React$Node = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Main" component={TabsNavigator} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
