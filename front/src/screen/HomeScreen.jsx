import React, { useEffect } from 'react';
import { Grid, Header, Placeholder, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Podcast from '../components/Podcast';
import { listPodcasts } from '../actions/podcastActions';

const HomeScreen = ({ title }) => {
  const dispatch = useDispatch();

  const { loading, error, podcasts } = useSelector(
    (state) => state.podcastList,
  );

  useEffect(() => {
    dispatch(listPodcasts());
  }, [dispatch]);

  if (error) {
    return (
      <Message negative>
        <Message.Header>We're sorry. There is something wrong.</Message.Header>
        <p>{error.message}</p>
      </Message>
    );
  }

  if (loading) {
    return (
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length='very short' />
          <Placeholder.Line length='medium' />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line length='short' />
        </Placeholder.Paragraph>
      </Placeholder>
    );
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
