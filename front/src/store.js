import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  podcastsListReducer,
  singlePodcastReducer,
} from './reducers/podcastsReducers';
import { episodesListReducer } from './reducers/episodesReducers';
import { playerStatus } from './reducers/playerReducers';
import { getUserReducer } from './reducers/userReducer';
import { posterReducers } from './reducers/fetchDataReducers';

const reducer = combineReducers({
  podcastsList: podcastsListReducer,
  episodesList: episodesListReducer,
  soloPodcast: singlePodcastReducer,
  playerStatus: playerStatus,
  userLogin: getUserReducer,
  avatar: posterReducers,
});

const initialState = {
  userLogin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
