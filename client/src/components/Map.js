import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

function getCurrentLocation(setInitial) {
  const options = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 1000
  };

  navigator.geolocation.getCurrentPosition(position => {
    setInitial({
      latitude: parseFloat(position.coords.latitude),
      longitude: parseFloat(position.coords.longitude),
      latitudeDelta: 5,
      longitudeDelta: 5
    });
  }, options);
}

const Map = () => {
  const [initial, setInitial] = useState(null);

  useEffect(() => {
    if (!initial) getCurrentLocation(setInitial);
  }, [initial]);

  return (
    <MapView
      style={styles.map}
      initialRegion={initial}
      followsUserLocation
      zoomEnabled
      showsUserLocation
    >
      <Polyline />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { height: 300 }
});

export default Map;
