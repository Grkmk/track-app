import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';

const appReducer = combineReducers({
  auth: authReducer,
  error: errorReducer
});

export default (state, action) => appReducer(state, action);
