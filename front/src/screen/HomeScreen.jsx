import React, { useEffect } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Podcast from '../components/Podcast';
import { listPodcasts } from '../actions/podcastActions';

import Loader from '../components/Loader';
import MessageHandler from '../components/MessageHandler';

const HomeScreen = ({ title }) => {
  const dispatch = useDispatch();

  const { loading, error, podcasts } = useSelector(
    (state) => state.podcastList,
  );

  useEffect(() => {
    dispatch(listPodcasts());
  }, [dispatch]);

  if (error) {
    return <MessageHandler message={error} colour='red' />;
  }

  if (loading) {
    return <Loader />;
  }

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
