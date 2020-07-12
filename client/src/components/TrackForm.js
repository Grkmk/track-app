import React, { useState, useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import Spacer from './spacer';
import * as actions from '../actions';

const TrackForm = ({ track, changeTrackName, recording, saveTrack }) => {
  const handleSave = () => saveTrack(track.track_name, track.locations);

  const startBtn = <Button title='Start' onPress={() => recording(true)} />;
  const stopBtn = <Button title='Stop' onPress={() => recording(false)} />;
  const svBtn = <Button title='Save' onPress={handleSave} />;

  const [isRecording, setIsRecording] = useState(false);
  const [couldSave, setCouldSave] = useState(false);
  const [btn, setBtn] = useState(startBtn);
  const [saveBtn, setSaveBtn] = useState(null);

  useEffect(() => {
    if (!track) return;
    setIsRecording(track.recording);
    setCouldSave(!!track.locations.length);
  }, [track.recording, track.locations]);

  useEffect(() => {
    setBtn(isRecording ? stopBtn : startBtn);
    setSaveBtn(!isRecording && couldSave ? <Spacer>{svBtn}</Spacer> : null);
  }, [isRecording, couldSave]);

  return (
    <>
      <Spacer>
        <Input
          onChangeText={val => changeTrackName(val)}
          placeholder='Enter Track Name'
        />
      </Spacer>
      <Spacer>{btn}</Spacer>
      {saveBtn}
    </>
  );
};

function mapStateToProps(data) {
  return { track: data.loc };
}

export default connect(mapStateToProps, actions)(TrackForm);
