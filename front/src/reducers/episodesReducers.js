import {
  EPISODES_LIST_REQUEST,
  EPISODES_LIST_SUCCESS,
  EPISODES_LIST_FAIL,
} from '../constants/types';

export const episodesListReducer = (state = [{ episodes: {} }], action) => {
  if (action.type === EPISODES_LIST_REQUEST) {
    return { loading: true, payload: [] };
  }
  if (action.type === EPISODES_LIST_SUCCESS) {
    return { loading: false, payload: action.payload };
  }
  if (action.type === EPISODES_LIST_FAIL) {
    return { loading: false, error: action.payload };
  }
  return state;
};
