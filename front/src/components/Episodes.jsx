import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listEpisodes } from '../actions/episodeActions';
import { Item } from 'semantic-ui-react';

import Episode from './Episode';
import Loader from './Loader';
import MessageHandler from './MessageHandler';

const Episodes = ({ id }) => {
  const dispatch = useDispatch();
  let { loading, error, episodes } = useSelector((state) => state.episodesList);
  useEffect(() => {
    dispatch(listEpisodes(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <MessageHandler message={error} />;
  }

  return (
    <>
      <Item.Group divided>
        {episodes.map((p) => (
          <Episode key={p._id} episode={p} />
        ))}
      </Item.Group>
    </>
  );
};

export default Episodes;
