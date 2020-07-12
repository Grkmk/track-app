import AsyncStorage from '@react-native-community/async-storage';

import { instance, authInstance } from '../api/tracker';
import * as types from './types';

export const signup = ({ email, password }) => async dispatch => {
  try {
    const res = await instance.post('/signup', { email, password });
    await AsyncStorage.setItem('token', res.data.token);

    dispatch({ type: types.SIGNIN, payload: res.data.token });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ERROR, payload: 'could not signup' });
  }
};

export const signin = ({ email, password }) => async dispatch => {
  try {
    const res = await instance.post('/signin', { email, password });
    await AsyncStorage.setItem('token', res.data.token);

    dispatch({ type: types.SIGNIN, payload: res.data.token });
  } catch (err) {
    dispatch({ type: types.ERROR, payload: 'could not signin' });
  }
};

export const clearError = () => dispatch => {
  dispatch({ type: types.ERROR, payload: '' });
};

export const localSignin = () => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) dispatch({ type: types.SIGNIN, payload: token });
  } catch (err) {}

  dispatch({ type: types.INIT, payload: true });
};

export const signout = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({ type: types.SIGNIN, payload: null });
  } catch (err) {
    dispatch({ type: types.ERROR, payload: 'could not signout' });
  }
};

export const recording = isRecording => dispatch => {
  dispatch({ type: types.RECORDING, payload: isRecording });
};

export const addLocation = (location, isRecording) => dispatch => {
  dispatch({ type: types.CURRENT_LOC, payload: location });
  if (isRecording) dispatch({ type: types.LOCATIONS, payload: location });
};

export const changeTrackName = name => dispatch => {
  dispatch({ type: types.TRACK_NAME, payload: name });
};

export const resetLoc = () => dispatch => dispatch({ type: types.RESET_LOC });

export const saveTrack = (name, locations) => async dispatch => {
  try {
    await authInstance.post('/tracks', { name, locations });
  } catch (err) {
    console.log(err);
  }
};

export const fetchTracks = () => async dispatch => {
  let res;
  try {
    res = await authInstance.get('/tracks');
    dispatch({ type: types.TRACKS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
