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
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: () => <HomeIcon width={32} height={32} fill="blue" />,
        }}
      />
      <Tab.Screen
        name="Charts"
        component={ChartsScreen}
        options={{
          tabBarIcon: () => <CoinsIcon width={32} height={32} fill="blue" />,
        }}
      />
      <Tab.Screen
        name="Loader"
        component={LoaderScreen}
        options={{
          tabBarIcon: () => <LoadingIcon width={32} height={32} fill="blue" />,
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
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
          name="Tabs"
          component={Tabs}
          options={{title: 'Slider scroll', ...headerStyle}}
        />
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
