import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Account from './src/screens/Account';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import TrackCreate from './src/screens/TrackCreate';
import TrackDetail from './src/screens/TrackDetail';
import TrackList from './src/screens/TrackList';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

function _TrackList() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='TrackList' component={TrackList} />
      <Stack.Screen name='TrackDetail' component={TrackDetail} />
    </Stack.Navigator>
  );
}

function User() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name='TrackList' component={_TrackList} />
      <Bottom.Screen name='TrackCreate' component={TrackCreate} />
      <Bottom.Screen name='Account' component={Account} />
    </Bottom.Navigator>
  );
}

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Signup'
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Signin' component={Signin} />
    </Stack.Navigator>
  );
}

export default function App(state) {
  console.log(state);
  return (
    <AuthProvider>
      <NavigationContainer ref={navigator => setNavigator(navigator)}>
        {state.token == null ? Root() : User()}
      </NavigationContainer>
    </AuthProvider>
  );
}
