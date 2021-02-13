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
  let { loading, error, episodes } = useSelector((state) => state.episodesList);

  useEffect(() => {
    dispatch(listEpisodes(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Button icon as={Link} to='/' basic color='violet'>
        <Icon name='chevron circle left' /> <span>Back</span>
      </Button>
      {loading ? (
        <Loader />
      ) : error ? (
        <MessageHandler message={error} color='red' />
      ) : (
        <Item.Group divided>
          {episodes.map((p) => (
            <Episode key={p._id} episode={p} />
          ))}
        </Item.Group>
      )}
    </>
  );
};

export default PodcastDetailScreen;
