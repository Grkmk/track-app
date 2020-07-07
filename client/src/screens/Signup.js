import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const Signup = ({ data, signup, navigation, clearError }) => {
  const clearErr = navigation.addListener('transitionStart', clearError);
  useEffect(() => clearErr(), [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerTxt='Sign Up'
        errorMsg={data.error}
        onSubmit={signup}
        buttonTxt='Sign Up'
      />
      <NavLink
        routeName='Signin'
        txt='Already have an account? Sign in instead!'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

function mapStateToProps(data) {
  return { data: data };
}

export default connect(mapStateToProps, actions)(Signup);
