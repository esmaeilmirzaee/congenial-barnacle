import React, { useState, useEffect } from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Episode from '../components/Episode';

const PodcastDetailScreen = ({ match }) => {
  const [episodes, setEpisodes] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      let { data } = await axios.get(`/api/podcasts/${match.params.id}`);
      setEpisodes(data.e);
      setImage(data.i[0].image);
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
          <Episode key={p._id} episode={p} image={image} />
        ))}
      </Item.Group>
    </>
  );
};

export default PodcastDetailScreen;
