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
import LoaderScreen from './src/pages/loader/loader.screen.js';
import TransitionScreen from './src/pages/transitions/transition.screen.js';

// helpers
import ThemeContext, {ThemeProvider} from './src/app/theme-context';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsNavigator = () => (
  <Tabs.Navigator initialRouteName="Main">
    <Tabs.Screen name="Main" component={MainScreen} />
    <Tabs.Screen name="Callery" component={CalleryScreen} />
    <Tabs.Screen name="Tab" component={TabScreen} />
    <Tabs.Screen name="Loader" component={LoaderScreen} />
  </Tabs.Navigator>
);

const TransitionsNavigator = () => (
  <Stack.Navigator initialRouteName="Main Stack">
    <Stack.Screen name="Main Stack" component={TabsNavigator} />
    <Stack.Screen
      name="TransitionSlideFromRightIOS"
      component={TransitionScreen}
      options={{
        title: 'SlideFromRightIOS',
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
    <Stack.Screen
      name="TransitionModalSlideFromBottomIOS"
      component={TransitionScreen}
      options={{
        title: 'ModalSlideFromBottomIOS',
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    />
    <Stack.Screen
      name="TransitionModalPresentationIOS"
      component={TransitionScreen}
      options={{
        title: 'ModalPresentationIOS',
        ...TransitionPresets.ModalPresentationIOS,
      }}
    />
    <Stack.Screen
      name="TransitionFadeFromBottomAndroid"
      component={TransitionScreen}
      options={{
        title: 'ModalPresentationIOS',
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="TransitionRevealFromBottomAndroid"
      component={TransitionScreen}
      options={{
        title: 'RevealFromBottomAndroid',
        ...TransitionPresets.RevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="TransitionDefaultTransition"
      component={TransitionScreen}
      options={{
        title: 'DefaultTransition',
        ...TransitionPresets.DefaultTransition,
      }}
    />
    <Stack.Screen
      name="TransitionModalTransition"
      component={TransitionScreen}
      options={{
        title: 'ModalTransition',
        ...TransitionPresets.ModalTransition,
      }}
    />
  </Stack.Navigator>
);

const App: () => React$Node = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        {/*<Drawer.Navigator>
          <Drawer.Screen name="Main" component={TabsNavigator} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen
            name="TransitionSlideFromRightIOS"
            component={TransitionsNavigator}
          />
        </Drawer.Navigator>*/}
        <TransitionsNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
