import { CURRENT_LOC, LOCATIONS, RECORDING } from '../actions/types';

export default function (
  state = { [CURRENT_LOC]: {}, [LOCATIONS]: [], [RECORDING]: false },
  action
) {
  switch (action.type) {
    case CURRENT_LOC:
      return { ...state, [CURRENT_LOC]: action.payload ? action.payload : {} };
    case LOCATIONS:
      return { ...state, [LOCATIONS]: action.payload ? action.payload : [] };
    case RECORDING:
      return { ...state, [RECORDING]: action.payload ? action.payload : false };
    default:
      return state;
  }
}
