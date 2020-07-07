import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';

import Spacer from '../components/spacer';
import * as actions from '../actions';

const Account = ({ signout }) => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>Account</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default connect(null, actions)(Account);
