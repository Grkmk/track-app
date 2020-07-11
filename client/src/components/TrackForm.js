import React, { useState, useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import Spacer from './spacer';
import * as actions from '../actions';

const TrackForm = ({ track, changeTrackName, recording }) => {
  const startBtn = <Button title='Start' onPress={() => recording(true)} />;
  const stopBtn = <Button title='Stop' onPress={() => recording(false)} />;
  const [isRecording, setIsRecording] = useState(false);
  const [btn, setBtn] = useState(startBtn);

  useEffect(() => {
    if (!track) return;
    setIsRecording(track.recording);
  }, [track]);

  useEffect(() => setBtn(isRecording ? stopBtn : startBtn), [isRecording]);

  return (
    <>
      <Spacer>
        <Input
          onChangeText={val => changeTrackName(val)}
          placeholder='Enter Track Name'
        />
      </Spacer>
      <Spacer>{btn}</Spacer>
    </>
  );
};

function mapStateToProps(data) {
  return { track: data.loc };
}

export default connect(mapStateToProps, actions)(TrackForm);
