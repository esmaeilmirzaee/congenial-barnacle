import axios from 'axios';
import {
  PODCAST_LIST_REQUEST,
  PODCAST_LIST_SUCCESS,
  PODCAST_LIST_FAIL,
} from '../constants/type';

export const fetchPodcasts = () => async (dispatch) => {
  dispatch({ type: PODCAST_LIST_REQUEST });
  console.log('fetch');
  try {
    const { data } = await axios.get('http://127.0.0.1:5000/api/podcasts');
    dispatch({ type: PODCAST_LIST_SUCCESS, payload: data });
    console.log(data);
  } catch (e) {
    dispatch({ type: PODCAST_LIST_FAIL });
  }
};
