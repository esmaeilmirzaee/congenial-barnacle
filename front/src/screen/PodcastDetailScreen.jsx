import React, { useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SoloPodcast from '../components/SoloPodcast';
import Episodes from '../components/Episodes';

const PodcastDetailScreen = ({ match }) => {
  return (
    <>
      <Button icon as={Link} to='/' basic color='violet'>
        <Icon name='chevron circle left' /> <span>Back</span>
      </Button>
      <>
        <SoloPodcast id={match.params.id} />
        <Episodes id={match.params.id} />
      </>
    </>
  );
};

export default PodcastDetailScreen;
