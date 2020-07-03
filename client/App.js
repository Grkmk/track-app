import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Account from './src/screens/Account';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import TrackCreate from './src/screens/TrackCreate';
import TrackDetail from './src/screens/TrackDetail';
import TrackList from './src/screens/Account';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

export default function App(state) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.token == null ? (
          <>
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Signin' component={Signin} />
          </>
        ) : (
          <Bottom.Navigator>
            <Stack.Navigator>
              <Stack.Screen name='TrackDetail' component={TrackDetail} />
              <Stack.Screen name='TrackList' component={TrackList} />
            </Stack.Navigator>
            <Bottom.Screen name='Account' component={Account} />
            <Bottom.Screen name='TrackCreate' component={TrackCreate} />
          </Bottom.Navigator>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
