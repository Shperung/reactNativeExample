import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {createDrawerNavigator} from '@react-navigation/drawer';

// screens
import MainScreen from './src/pages/main/main.screen';
import LoaderScreen from './src/pages/loader/loader.screen';
import SettingsScreen from './src/pages/settings/settings.screen';
import TabsScreen from './src/pages/tabs/tabs.screen';
import GalleryScreen from './src/pages/gallery/gallery.screen.js';
import TransitionScreen from './src/pages/transitions/transition.screen.js';

// icons
import HomeIcon from './src/svg/assets/home.svg';
import CoinsIcon from './src/svg/assets/coins.svg';
import LoadingIcon from './src/svg/assets/loading.svg';
import SettingsIcon from './src/svg/assets/settings.svg';
import UtilitiesIcon from './src/svg/assets/utilities.svg';

// mixins
import mixins, {DARK_THEME} from './src/app/mixins.js';
import ThemeContext, {ThemeProvider} from './src/app/theme-context';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

enableScreens();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Transition" component={TransitionScreen} />
//     </Drawer.Navigator>
//   );
// }

function Tabs() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  const isDark = theme === DARK_THEME;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: isDark
          ? mixins.color.grayLight
          : mixins.color.greenDark,
        inactiveBackgroundColor: isDark
          ? mixins.color.greenDark
          : mixins.color.grayLight,
        activeBackgroundColor: isDark
          ? mixins.color.greenDark
          : mixins.color.grayLight,
      }}>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <HomeIcon
              width={24}
              height={24}
              fill={color}
              style={{marginTop: 4}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: ({color}) => (
            <CoinsIcon
              width={24}
              height={24}
              fill={color}
              style={{marginTop: 4}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Loader"
        component={LoaderScreen}
        options={{
          tabBarIcon: ({color}) => (
            <LoadingIcon
              width={24}
              height={24}
              fill={color}
              style={{marginTop: 4}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tab"
        component={TabsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <UtilitiesIcon
              width={24}
              height={24}
              fill={color}
              style={{marginTop: 4}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <SettingsIcon
              width={24}
              height={24}
              fill={color}
              style={{marginTop: 4}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        // глобально для Stack.Navigator
        headerStyle: {
          backgroundColor:
            useContext(ThemeContext).theme === DARK_THEME
              ? mixins.color.green
              : mixins.color.greenDark,
        },
        headerTintColor: mixins.color.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{title: 'Cat bio', ...headerStyle}}
      />

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
}

const App = () => (
  <ThemeProvider>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
