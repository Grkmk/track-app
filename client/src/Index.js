import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Account from './screens/Account';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import TrackCreate from './screens/TrackCreate';
import TrackDetail from './screens/TrackDetail';
import TrackList from './screens/TrackList';
import { setNavigator } from './navigationRef';

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
      <Stack.Screen
        name='Signin'
        component={Signin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const Index = ({ data }) => {
  return (
    <NavigationContainer ref={navigator => setNavigator(navigator)}>
      {data.auth == null ? Root() : User()}
    </NavigationContainer>
  );
};

function mapStateToProps(data) {
  return { data: data };
}

export default connect(mapStateToProps)(Index);
