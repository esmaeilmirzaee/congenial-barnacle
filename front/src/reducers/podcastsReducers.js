import {
  PODCASTS_LIST_REQUEST,
  PODCASTS_LIST_SUCCESS,
  PODCASTS_LIST_FAIL,
  SINGLE_PODCAST_REQUEST,
  SINGLE_PODCAST_SUCCESS,
  SINGLE_PODCAST_FAIL,
} from '../constants/types';

export const podcastsListReducer = (state = { podcasts: [] }, action) => {
  if (action.type === PODCASTS_LIST_REQUEST) {
    return { loading: true, ...state };
  }
  if (action.type === PODCASTS_LIST_SUCCESS) {
    return { loading: false, podcasts: action.payload };
  }
  if (action.type === PODCASTS_LIST_FAIL) {
    return { loading: false, error: action.payload };
  }
  return state;
};

export const singlePodcastReducer = (state = { podcast: {} }, action) => {
  if (action.type === SINGLE_PODCAST_REQUEST) {
    return { loading: true, ...state };
  }
  if (action.type === SINGLE_PODCAST_SUCCESS) {
    return { loading: false, podcast: action.payload };
  }
  if (action.type === SINGLE_PODCAST_FAIL) {
    return { loading: false, error: action.payload };
  }
  return state;
};
