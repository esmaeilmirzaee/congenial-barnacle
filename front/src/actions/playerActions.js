import { CHANGE_PLAYER_STATUS } from '../constants/types';

export const changePlayerStatus = (episode) => (dispatch, getState) => {
  console.log(getState().playerStatus);
  dispatch({ type: CHANGE_PLAYER_STATUS, payload: episode });
};
