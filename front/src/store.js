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

const reducer = combineReducers({
  podcastsList: podcastsListReducer,
  episodesList: episodesListReducer,
  soloPodcast: singlePodcastReducer,
  playerStatus: playerStatus,
  userLogin: getUserReducer,
});

const initialState = {
  userLogin: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {},
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
