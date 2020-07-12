import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { connect } from 'react-redux';

const Map = ({ location }) => {
  const [currentLocation, setCurrentLocation] = useState({});
  const activityIndicator = (
    <ActivityIndicator size='large' style={{ marginTop: 200 }} />
  );
  const mapView = (
    <MapView
      style={styles.map}
      initialRegion={currentLocation}
      region={currentLocation}
    >
      <Circle
        center={currentLocation}
        radius={50}
        strokeColor='rgba(158,158,255,1)'
        fillColor='rgba(158,158,255,0.3)'
      />
      <Polyline coordinates={location.locations.map(loc => loc.coords)} />
    </MapView>
  );

  useEffect(() => {
    if (!location.current_loc.coords) return;
    setCurrentLocation({
      ...location.current_loc.coords,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    });
  }, [location]);

  return <>{location ? mapView : activityIndicator}</>;
};

const styles = StyleSheet.create({
  map: { height: 300 }
});

function mapStateToProps(data) {
  return { location: data.loc };
}

export default connect(mapStateToProps)(Map);
