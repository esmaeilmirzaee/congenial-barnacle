import React, { useState, useEffect } from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Podcast from '../components/Podcast';

const PodcastScreen = ({ match }) => {
  const [episodes, setEpisodes] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      let { data } = await axios.get('/api/podcasts');
      setImage(data.find((p) => p._id === match.params.id).image);
    };
    fetchPodcasts();
  }, [match]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      let { data } = await axios.get(
        `/api/podcasts/${match.params.id}/episodes/`,
      );
      setEpisodes(data.episodes);
    };
    fetchEpisodes();
  }, [match]);

  return (
    <>
      <Button icon as={Link} to='/' basic color='violet'>
        <Icon name='chevron circle left' /> <span>Back</span>
      </Button>
      <Item.Group divided>
        {episodes.map((p) => (
          <Podcast key={p._eid} podcast={p} image={image} />
        ))}
      </Item.Group>
    </>
  );
};

export default PodcastScreen;
