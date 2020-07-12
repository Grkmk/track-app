import { TRACKS } from '../actions/types';

export default function (state, action) {
  switch (action.type) {
    case TRACKS:
      return action.payload || null;
    default:
      return state;
  }
}
