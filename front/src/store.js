import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  podcastsListReducer,
  singlePodcastReducer,
} from './reducers/podcastsReducers';
import { episodesListReducer } from './reducers/episodesReducers';
import { playerStatus } from './reducers/playerReducers';

const reducer = combineReducers({
  podcastsList: podcastsListReducer,
  episodesList: episodesListReducer,
  soloPodcast: singlePodcastReducer,
  playerStatus: playerStatus,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
