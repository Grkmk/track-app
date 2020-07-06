import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Spacer from './spacer';

const NavLink = ({ txt, routeName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{txt}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({ link: { color: 'blue' } });

export default NavLink;
