import React from 'react';
import { Item, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Podcast from '../components/Podcast';
import episodes from '../tmp/episodes';

import products from '../tmp/products';

const PodcastScreen = ({ match }) => {
  // Note to myself -> Be careful here for type of _id and id
  let podcast = episodes.find((p) => p._id === Number(match.params.id));

  // what is the best?
  let image = products.find((p) => p._id === match.params.id).img;

  return (
    <>
      <Button icon='left chevron' as={Link} to='/'>
        <span>Back</span>
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
