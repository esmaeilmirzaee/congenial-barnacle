import React, { useState, useEffect } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Podcast from '../components/Podcast';

const HomeScreen = ({ title = 'Podcasts' }) => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      let { data } = await axios.get('/api/podcasts');
      setPodcasts(data);
    };
    fetchPodcasts();
  }, []);

  return (
    <div>
      <Header as='h3'>{title}</Header>
      <Grid columns={3}>
        <Grid.Row>
          {podcasts.map((p) => (
            <Podcast key={p._id} podcast={p} />
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

HomeScreen.defaultProps = {
  title: 'Latest',
};

HomeScreen.propTypes = {
  title: PropTypes.string,
};

export default HomeScreen;
