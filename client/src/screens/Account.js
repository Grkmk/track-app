import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

import Spacer from '../components/spacer';
import * as actions from '../actions';

const Account = ({ signout }) => {
  return (
    <>
      <Text style={{ fontSize: 30 }}>Account</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default connect(null, actions)(Account);
