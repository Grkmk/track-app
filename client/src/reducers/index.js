import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import initReducer from './initReducer';

const appReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  init: initReducer
});

export default (state, action) => appReducer(state, action);
