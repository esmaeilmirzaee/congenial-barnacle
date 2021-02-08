import React from 'react';
import { Container } from 'semantic-ui-react';

import Header from './nav/Header';
import Footer from './nav/Footer';
import HomeScreen from '../screen/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
          <h1>App</h1>
          <HomeScreen />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
