import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import { connect } from 'react-redux';

import * as actions from '../actions';

const TrackList = ({ navigation, tracks, fetchTracks }) => {
  const isFocused = useIsFocused();

  const memoizedTracks = useCallback(() => fetchTracks(), []);
  useEffect(() => {
    if (!isFocused) return;
    memoizedTracks();
  }, [isFocused, memoizedTracks]);

  const renderItem = item => (
    <TouchableOpacity
      onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
    >
      <ListItem chevron />
    </TouchableOpacity>
  );

  return (
    <>
      <Text style={{ fontSize: 30 }}>TrackList</Text>
      <FlatList
        data={tracks}
        keyExtractor={item => item._id}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({});

function mapStateToProps(data) {
  return { tracks: data.tracks };
}

export default connect(mapStateToProps, actions)(TrackList);
