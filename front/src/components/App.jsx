import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './nav/Header';
import Footer from './nav/Footer';
import HomeScreen from '../screen/HomeScreen';
import PodcastScreen from '../screen/PodcastScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main style={{ marginTop: '1rem' }}>
          <Route path='/podcast/:id' component={PodcastScreen} />
          {/* TODO: Bug title doesn't work */}
          <Route path='/' component={HomeScreen} title={'Trending'} exact />
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
