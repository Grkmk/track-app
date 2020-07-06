import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const Signin = ({ data, signin }) => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerTxt='Sign In'
        errorMsg={data.errorMessage}
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
