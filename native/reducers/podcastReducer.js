import {
  PODCAST_LIST_REQUEST,
  PODCAST_LIST_SUCCESS,
  PODCAST_LIST_FAIL,
} from '../constants/type';

export const podcastReducer = (state = { podcasts: [] }, action) => {
  if (action.type === PODCAST_LIST_REQUEST) {
    return { loading: true, podcasts: {} };
  }

  if (action.type === PODCAST_LIST_SUCCESS) {
    return { loading: false, podcasts: action.payload };
  }

  if (action.type === PODCAST_LIST_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};
