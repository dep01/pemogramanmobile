import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from './view/home';
import splash from './view/splashscreen';
import welcome from './view/welcome';
import login from './view/login';
import aritmatika from './view/aritmatika';
import count from './view/count';
import soundCloud from './view/soundCloud';
import settings from './view/settings';
import Icons from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === '/audio' || route.name === '/soundcloud') {
            iconName = 'music';
          } else if (route.name === '/aritmatika') {
            iconName = 'calculator';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="/audio"
        component={home}
        options={{title: 'Local Audio'}}
      />
      <Tab.Screen
        name="/soundcloud"
        component={soundCloud}
        options={{title: 'SoundCloud'}}
      />
      <Tab.Screen
        name="/aritmatika"
        component={aritmatika}
        options={{title: 'Aritmatika'}}
      />
    </Tab.Navigator>
  );
};
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/splash">
        <Stack.Screen name="/login" component={login} />
        <Stack.Screen name="/splash" component={splash} />
        <Stack.Screen name="/count" component={count} />
        <Stack.Screen name="/settings" component={settings} />
        <Stack.Screen name="/welcome" component={welcome} />
        <Stack.Screen
          name="/home"
          component={TabNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
