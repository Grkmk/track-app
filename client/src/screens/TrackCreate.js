import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { requestPermissionsAsync } from 'expo-location';

import Map from '../components/Map';

// TODO: delete before prod, for testing only
import { watchPositionAsync, Accuracy } from 'expo-location';
import '../_mockLocation';

const TrackCreate = () => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await requestPermissionsAsync();
      if (status !== 'granted') setErr('Location access was denied');
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        location => console.log(location)
      );
    })();
  }, []);

  return (
    <SafeAreaView>
      <Text h3>Create Track</Text>
      <Map />
      {err && <Text>Please enable location services</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreate;
