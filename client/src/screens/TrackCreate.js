import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import Map from '../components/Map';
import * as actions from '../actions';
import useLocation from '../hooks/useLocation';

const TrackCreate = ({ addLocation }) => {
  const [err] = useLocation(addLocation);

  return (
    <SafeAreaView>
      <Text h3>Create Track</Text>
      <Map />
      {err && <Text>Please enable location services</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default connect(null, actions)(TrackCreate);
