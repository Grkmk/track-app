import { ERROR } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case ERROR:
      return action.payload || false;
    default:
      return state;
  }
}
