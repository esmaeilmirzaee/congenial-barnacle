import axios from 'axios';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
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
    localStorage.setItem('userInfo', JSON.stringify(data));
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

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  try {
    localStorage.removeItem('userInfo');
  } catch (e) {
    console.log('Cannot logout user');
  }
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    let res = await axios.post('/api/user/register', { name, email, password });
    if (res) {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res });
    }
  } catch (e) {
    dispatch({ type: USER_REGISTER_FAIL, payload: e });
  }
};
