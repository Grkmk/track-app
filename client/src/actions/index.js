import AsyncStorage from '@react-native-community/async-storage';

import trackerApi from '../api/tracker';
import * as types from './types';

export const signup = ({ email, password }) => async dispatch => {
  try {
    const res = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', res.data.token);

    dispatch({ type: types.SIGNIN, payload: res.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: types.ERROR, payload: 'could not signup' });
  }
};

export const signin = ({ email, password }) => async dispatch => {
  try {
    const res = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', res.data.token);

    dispatch({ type: types.SIGNIN, payload: res.data.token });
    navigate('TrackList');
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
