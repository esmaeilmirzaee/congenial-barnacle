import React, { useEffect } from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Episode from '../components/Episode';

import { listEpisodes } from '../actions/episodeActions';

import Loader from '../components/Loader';
import MessageHandler from '../components/MessageHandler';

const PodcastDetailScreen = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listEpisodes(match.params.id));
  }, [match, dispatch]);

  let episodesList = useSelector((state) => state.episodesList);
  let { loading, error, payload } = episodesList;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <MessageHandler message={error} color='red' />;
  }

  if (payload) {
    let image = payload.i[0].image;
    let episodes = payload.e;
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
  } else {
    return <h1>NOT</h1>;
  }
};

export default PodcastDetailScreen;
