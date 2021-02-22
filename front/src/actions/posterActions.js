import axios from 'axios';
import {
  POSTER_REQUEST,
  POSTER_SUCCESS,
  POSTER_FAIL,
} from '../constants/types';

export const fetchPosters = (name) => async (dispatch) => {
  dispatch({ type: POSTER_REQUEST });
  try {
    // let img = await axios.get(`http://localhost:5000/uploads/p/${name}`);
    let img = `http://localhost:5000/uploads/p/${name}`;
    if (img) {
      dispatch({ type: POSTER_SUCCESS, payload: img });
    }
  } catch (e) {
    dispatch({ type: POSTER_FAIL, payload: e });
  }
};
