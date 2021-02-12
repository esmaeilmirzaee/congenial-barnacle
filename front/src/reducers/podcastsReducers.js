import {
  PODCASTS_LIST_REQUEST,
  PODCASTS_LIST_SUCCESS,
  PODCASTS_LIST_FAIL,
} from '../constants/types';

export const podcastsListReducer = (state = { podcasts: [] }, action) => {
  if (action.type === PODCASTS_LIST_REQUEST) {
    return { loading: true, podcasts: [] };
  }
  if (action.type === PODCASTS_LIST_SUCCESS) {
    return { loading: false, podcasts: action.payload };
  }
  if (action.type === PODCASTS_LIST_FAIL) {
    return { loading: false, error: action.payload };
  }
  return state;
};
