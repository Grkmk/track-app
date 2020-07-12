import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetail = ({ navigation, tracks }) => {
  const _id = navigation.getParam('_id');
  const track = tracks.find(t => t._id === _id);
  const initialRegion = {
    longitudeDelta: 0.01,
    latitudeDelta: 0.01,
    ...track.locations[0].coords
  };

  return (
    <>
      <Text style={{ fontSize: 30 }}>{track.name}</Text>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: { height: 300 }
});

function mapStateToProps(data) {
  return { tracks: data.tracks };
}

export default connect(mapStateToProps)(TrackDetail);
