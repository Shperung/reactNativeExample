import 'react-native-gesture-handler';
import React, {useContext} from 'react';
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
import SettingsScreen from '../pages/settings/settings.screen.js';
import MainScreen from '../pages/main/main.screen.js';
import CalleryScreen from '../pages/gallery/gallery.screen.js';
import TabScreen from '../pages/tabs/tabs.screen.js';
import LoaderScreen from '../pages/loader/loader.screen.js';
import TransitionScreen from '../pages/transitions/transition.screen.js';

// helpers
import mixins, {DARK_THEME, DEVICE_WIDTH, DEVICE_HEIGHT} from './mixins.js';
import ThemeContext, {ThemeProvider} from './theme-context';

// icons
import HomeIcon from '../svg/assets/home.svg';
import CoinsIcon from '../svg/assets/coins.svg';
import LoadingIcon from '../svg/assets/loading.svg';
import SettingsIcon from '../svg/assets/settings.svg';
import UtilitiesIcon from '../svg/assets/utilities.svg';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const isDark = theme === DARK_THEME;

  return (
    <Tabs.Navigator
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
      <Tabs.Screen
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
        name="Main"
        component={MainScreen}
      />
      <Tabs.Screen
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
        name="Callery"
        component={CalleryScreen}
      />
      <Tabs.Screen
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
        name="Tab"
        component={TabScreen}
      />
      <Tabs.Screen
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
        name="Loader"
        component={LoaderScreen}
      />
    </Tabs.Navigator>
  );
};

const DrawerNavigator = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const isDark = theme === DARK_THEME;
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: isDark ? mixins.color.green : mixins.color.greenDark,
        width: 200,
      }}
      drawerContentOptions={{
        activeTintColor: mixins.color.white,
        inactiveTintColor: mixins.color.grayLight09,
        itemStyle: {
          backgroundColor: 'transparent',
        },
      }}
      hideStatusBar
      overlayColor={mixins.color.greenDark06}>
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <HomeIcon width={24} height={24} fill={color} />
          ),
        }}
        name="Main"
        component={TabsNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <SettingsIcon width={24} height={24} fill={color} />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MainNavigator = () => (
  <Stack.Navigator
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
    }}
    initialRouteName="Main Stack">
    <Stack.Screen name="Main Stack" component={DrawerNavigator} />
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
    <Stack.Screen
      name="CustomModal"
      component={TransitionScreen}
      options={{
        title: 'Custom Modal',
        cardStyle: {backgroundColor: 'transparent', opacity: 0},
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({current: {progress}}) => ({
          cardStyle: {
            transform: [
              {
                scale: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const isDark = theme === DARK_THEME;

  return (
    <NavigationContainer
      theme={{
        dark: isDark,
        colors: {
          background: isDark ? mixins.color.greenDark : mixins.color.grayLight,
          card: isDark ? mixins.color.greenDark : mixins.color.grayLight,
          text: isDark ? mixins.color.white : mixins.color.black,
          border: mixins.color.greenDark06,
        },
      }}>
      <MainNavigator />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
