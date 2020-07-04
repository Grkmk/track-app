import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackList = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 30 }}>TrackList</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackList;
