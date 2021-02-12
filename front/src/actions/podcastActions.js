import axios from 'axios';
import {
  PODCASTS_LIST_REQUEST,
  PODCASTS_LIST_SUCCESS,
  PODCASTS_LIST_FAIL,
} from '../constants/types';

export const listPodcasts = () => async (dispatch) => {
  try {
    dispatch({ type: PODCASTS_LIST_REQUEST });
    let { data } = await axios.get('/api/podcasts/');
    dispatch({ type: PODCASTS_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: PODCASTS_LIST_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
