import axios from 'axios';

import {
  PODCAST_LIST_REQUEST,
  PODCAST_LIST_SUCCESS,
  PODCAST_LIST_FAIL,
} from '../constants/types';

export const listPodcasts = () => async (dispatch) => {
  try {
    dispatch({ type: PODCAST_LIST_REQUEST });

    let { data } = await axios.get('/api/podcasts/');
    dispatch({ type: PODCAST_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: PODCAST_LIST_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
