import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Signup = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 30 }}>Signup</Text>
      <Button
        title='Go to Signin'
        onPress={() => navigation.navigate('Signin')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Signup;
