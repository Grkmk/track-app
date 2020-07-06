import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { ...state, errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const res = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({ type: 'signup', payload: res.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'could not signup' });
  }
};

const signin = dispatch => ({ email, password }) => {};

const signout = dispatch => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' }
);
