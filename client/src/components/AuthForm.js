import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';

import Spacer from './spacer';

const AuthForm = ({ headerTxt, errorMsg, onSubmit, buttonTxt }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerTxt}</Text>
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
      {errorMsg ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}
      <Spacer>
        <Button
          title={buttonTxt}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMsg: { fontSize: 14, color: 'red', marginLeft: 10 }
});

export default AuthForm;
