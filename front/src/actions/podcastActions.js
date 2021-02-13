import axios from 'axios';
import {
  PODCASTS_LIST_REQUEST,
  PODCASTS_LIST_SUCCESS,
  PODCASTS_LIST_FAIL,
  SINGLE_PODCAST_REQUEST,
  SINGLE_PODCAST_SUCCESS,
  SINGLE_PODCAST_FAIL,
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

export const soloPodcast = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_PODCAST_REQUEST });
    let { data } = await axios.get(`/api/podcasts/p/${id}`);
    dispatch({ type: SINGLE_PODCAST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: SINGLE_PODCAST_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
