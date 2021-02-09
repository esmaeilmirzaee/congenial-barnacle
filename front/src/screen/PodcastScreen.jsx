import React, { useState, useEffect } from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Podcast from '../components/Podcast';

const PodcastScreen = ({ match }) => {
  const [episodes, setEpisodes] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [image, setImage] = useState('');
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      let { data } = await axios.get('/api/podcasts');
      setPodcasts(data);
      setPodcast(podcasts);
      setImage(podcasts.find((p) => p._id === match.params.id).img);
    };
    fetchPodcasts();
  }, []);

  useEffect(() => {
    const fetchEpisodes = async () => {
      let { data } = await axios.get('/api/podcasts/episodes/');
      setEpisodes(data);
    };
    fetchEpisodes();
  }, []);

  // Note to myself -> Be careful here for type of _id and id
  // let podcast = episodes.find((p) => p._id === Number(match.params.id));

  // What is the best?
  // let image = podcasts.find((p) => p._id === match.params.id).img;

  return (
    <>
      <Button icon as={Link} to='/' basic color='violet'>
        <Icon name='chevron circle left' /> <span>Back</span>
      </Button>
      <Item.Group divided>
        {podcast.episodes.map((p) => (
          <Podcast key={p._eid} podcast={p} image={image} />
        ))}
      </Item.Group>
    </>
  );
};

export default PodcastScreen;
