import axios from 'axios';
import {
  EPISODES_LIST_REQUEST,
  EPISODES_LIST_SUCCESS,
  EPISODES_LIST_FAIL,
} from '../constants/types';

export const listEpisodes = (id) => async (dispatch) => {
  try {
    dispatch({ type: EPISODES_LIST_REQUEST });
    let { data } = await axios.get(`/api/podcasts/${id}`);
    dispatch({ type: EPISODES_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: EPISODES_LIST_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
