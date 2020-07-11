import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';

import Map from '../components/Map';
import * as actions from '../actions';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreate = ({ addLocation, data }) => {
  const isFocused = useIsFocused();
  const memoizedCallback = useCallback(
    loc => addLocation(loc, data.recording),
    [data.recording]
  );
  const [err] = useLocation(isFocused || data.recording, memoizedCallback);

  return (
    <SafeAreaView>
      <Text h3>Create Track</Text>
      <Map />
      {err && <Text>Please enable location services</Text>}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

function mapStateToProps(data) {
  return { data: data.loc };
}

export default connect(mapStateToProps, actions)(TrackCreate);
