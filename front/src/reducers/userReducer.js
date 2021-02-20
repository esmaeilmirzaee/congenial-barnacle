import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
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
    return {};
  }

  return state;
};

export const registerUser = (state = {}, action) => {
  if (action.type === USER_REGISTER_REQUEST) {
    return { loading: true };
  }

  if (action.type === USER_REGISTER_SUCCESS) {
    return { loading: false, userInfo: action.payload };
  }

  if (action.type === USER_REGISTER_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};
