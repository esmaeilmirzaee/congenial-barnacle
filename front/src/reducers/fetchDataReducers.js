import {
  POSTER_REQUEST,
  POSTER_SUCCESS,
  POSTER_FAIL,
} from '../constants/types';

export const posterReducers = (state = {}, action) => {
  if (action.type === POSTER_REQUEST) {
    return { loading: true };
  }

  if (action.type === POSTER_SUCCESS) {
    return { loading: false, poster: action.payload };
  }

  if (action.type === POSTER_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};
