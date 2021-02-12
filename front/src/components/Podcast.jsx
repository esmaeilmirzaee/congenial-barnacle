import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import Rating from './Rating';
import Category from './Category';

const Podcast = ({ podcast }) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <Card>
        <Image
          src={podcast.image}
          as={Link}
          to={`/api/podcasts/${podcast._id}`}
        />
        <Card.Content>
          <Card.Header as={Link} to={`/api/podcasts/${podcast._id}`}>
            {podcast.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              <Rating value={podcast.rating} text={podcast.numReviews} />
            </span>
          </Card.Meta>
          <Card.Description>{podcast.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span>
            <Icon name='' />
            {podcast.category.map((cat) => (
              <Category key={cat} category={cat} />
            ))}
          </span>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default Podcast;
