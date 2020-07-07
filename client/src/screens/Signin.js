import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const Signin = ({ data, signin, clearError, navigation }) => {
  const clearErr = navigation.addListener('transitionStart', clearError);
  useEffect(() => clearErr(), [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerTxt='Sign In'
        errorMsg={data.error}
        onSubmit={signin}
        buttonTxt='Sign In'
      />
      <NavLink
        routeName='Signup'
        txt="Don't have an account? Sign up instead!"
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

export default connect(mapStateToProps, actions)(Signin);
