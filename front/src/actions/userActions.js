import axios from 'axios';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
} from '../constants/types';

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });

  try {
    let { data } = await axios.post(
      '/api/user/login/',
      {
        email,
        password,
      },
      { headers: { 'Content-Type': 'application/json' } },
    );
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    localStorage.setItem('user', JSON.stringify(data));
  } catch (e) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.response,
    });
  }
};
