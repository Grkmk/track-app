import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import initReducer from './initReducer';
import locationReducer from './locationReducer';
import trackReducer from './trackReducer';

const appReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  init: initReducer,
  loc: locationReducer,
  track: trackReducer
});

export default (state, action) => appReducer(state, action);
