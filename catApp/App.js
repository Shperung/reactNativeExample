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

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const MainScreen = () => {
  return <Text>MainScreen</Text>;
};

const CalleryScreen = () => {
  return <Text>CalleryScreen</Text>;
};

const SettingsScreen = () => {
  return <Text>SettingsScreen</Text>;
};

const TransitionsNavigator = () => (
  <Stack.Navigator initialRouteName="Settings">
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
  </Stack.Navigator>
);

const TabsNavigator = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Main" component={MainScreen} />
    <Tabs.Screen name="Callery" component={CalleryScreen} />
  </Tabs.Navigator>
);

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
        <Drawer.Screen
          name="TransitionsNavigator"
          component={TransitionsNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;