import {
  CURRENT_LOC,
  LOCATIONS,
  RECORDING,
  TRACK_NAME,
  RESET_LOC
} from '../actions/types';

export default function (
  state = {
    [CURRENT_LOC]: {},
    [LOCATIONS]: [],
    [RECORDING]: false,
    [TRACK_NAME]: ''
  },
  action
) {
  switch (action.type) {
    case CURRENT_LOC:
      return { ...state, [CURRENT_LOC]: action.payload };
    case LOCATIONS:
      return { ...state, [LOCATIONS]: [...state[LOCATIONS], action.payload] };
    case RECORDING:
      return { ...state, [RECORDING]: action.payload };
    case TRACK_NAME:
      return { ...state, [TRACK_NAME]: action.payload };
    case RESET_LOC:
      return (state = {
        [CURRENT_LOC]: {},
        [LOCATIONS]: [],
        [RECORDING]: false,
        [TRACK_NAME]: ''
      });
    default:
      return state;
  }
}
