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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import MainScreen from './src/pages/main/main.screen';
import ChartsScreen from './src/pages/charts/charts.screen';
import LoaderScreen from './src/pages/loader/loader.screen';

// icons
import HomeIcon from './src/svg/assets/home.svg';
import CoinsIcon from './src/svg/assets/coins.svg';
import LoadingIcon from './src/svg/assets/loading.svg';

// mixins
import mixins from './src/app/mixins.js';
import {ThemeProvider} from './src/app/theme-context';

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

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: mixins.color.green,
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
        name="Charts"
        component={ChartsScreen}
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
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tabs"
          screenOptions={{
            // глобально для Stack.Navigator
            headerStyle: {
              backgroundColor: mixins.color.green,
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
            name="Main"
            component={MainScreen}
            options={{title: 'Cat bio', ...headerStyle}}
          />
          <Stack.Screen
            name="Charts"
            component={ChartsScreen}
            options={{title: 'Charts', ...headerStyle}}
            initialParams={{from: 'App'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
