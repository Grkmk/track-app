import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from '../components/spacer';

const Signup = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3>Signup</Text>
      </Spacer>
      <Input label='Email' />
      <Spacer />
      <Input label='Password' />
      <Spacer>
        <Button title='Signup' onPress={() => navigation.navigate('Signin')} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default Signup;
