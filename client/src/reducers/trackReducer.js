import { SAVE_TRACK, TRACKS } from '../actions/types';

export default function (
  state = { [SAVE_TRACK]: false, [TRACKS]: [] },
  action
) {
  switch (action.type) {
    case SAVE_TRACK:
      return { ...state, [SAVE_TRACK]: action.payload };
    case TRACKS:
      return { ...state, [TRACKS]: [...state[TRACKS], action.payload] };
    default:
      return state;
  }
}
