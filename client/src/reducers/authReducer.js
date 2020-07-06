import { SIGNIN } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case SIGNIN:
      return action.payload || false;
    default:
      return state;
  }
}
