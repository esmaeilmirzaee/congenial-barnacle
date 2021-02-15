import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
} from '../constants/types';

export const getUserReducer = (state = {}, action) => {
  if (action.type === LOGIN_USER_REQUEST) {
    return { loading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return { loading: false, userInfo: action.payload };
  }

  if (action.type === LOGIN_USER_FAIL) {
    return { loading: false, error: action.payload };
  }

  if (action.type === LOGOUT_USER) {
    return { ...state, userInfo: {} };
  }

  return state;
};
