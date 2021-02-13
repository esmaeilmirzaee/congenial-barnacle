import React from 'react';
import { Container, Reveal } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './nav/Header';
import Footer from './nav/Footer';
import HomeScreen from '../screen/HomeScreen';
import PodcastDetailScreen from '../screen/PodcastDetailScreen';
import PlayerScreen from '../screen/PlayerScreen';
import '../assets/player_screen.css';

const App = () => {
  let { active, episode } = useSelector((state) => state.playerStatus);

  return (
    <Router>
      <Header />
      <Container>
        <main style={{ marginTop: '1rem' }}>
          <Route path='/api/podcasts/:id' component={PodcastDetailScreen} />
          {/* TODO: Bug title doesn't work */}
          <Route path='/' component={HomeScreen} title={'Trending'} exact />
        </main>
      </Container>
      <Footer />
      {active && episode && <PlayerScreen episode={episode} />}
    </Router>
  );
};

export default App;
