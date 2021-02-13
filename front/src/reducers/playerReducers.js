import { CHANGE_PLAYER_STATUS } from '../constants/types';

export const playerStatus = (
  state = { episode: {}, active: false },
  action,
) => {
  if (action.type === CHANGE_PLAYER_STATUS) {
    return { ...state, active: action.payload, episode: action.payload };
  }
  return state;
};
