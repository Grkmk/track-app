import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/spacer';

const Signup = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Signup</Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMsg}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title='Signup' onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  errorMsg: {
    fontSize: 14,
    color: 'red',
    marginLeft: 10
  }
});

export default Signup;
