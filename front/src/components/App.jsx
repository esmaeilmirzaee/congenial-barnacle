import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../assets/player_screen.css';
import Header from './nav/Header';

import HomeScreen from '../screen/HomeScreen';
import PodcastDetailScreen from '../screen/PodcastDetailScreen';
import PlayerScreen from '../screen/PlayerScreen';
import LoginScreen from '../screen/LoginScreen';
import ProfileScreen from '../screen/ProfileScreen';
import RegisterScreen from '../screen/RegisterScreen';

const App = () => {
  let { active, episode } = useSelector((state) => state.playerStatus);

  return (
    <Router>
      <Header />
      <Container style={{ margin: '1rem 0' }}>
        <main>
          <Route path='/api/podcasts/:id' component={PodcastDetailScreen} />
          <Route path='/api/user' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />

          {/* TODO: Bug title doesn't work */}
          <Route path='/' component={HomeScreen} title={'Trending'} exact />
        </main>
      </Container>
      {/* <Footer /> */}
      {active && episode && <PlayerScreen episode={episode} />}
    </Router>
  );
};

export default App;
