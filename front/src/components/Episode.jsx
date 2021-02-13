import React, { useEffect } from 'react';
import { Button, Item } from 'semantic-ui-react';

import Rating from './Rating';

const Episode = ({ episode }) => {
  return (
    <>
      <Item>
        <Item.Image src={episode.image} size='tiny' />
        <Item.Content>
          <Item.Header as='a'>{episode.title}</Item.Header>
          <Item.Meta>{episode.date}</Item.Meta>
          <Item.Description>{episode.description}</Item.Description>
          <Item.Extra>
            <Button icon='play' floated='right' basic circular color='violet' />
          </Item.Extra>
          <Rating value={episode.rating} text={episode.numReviews} />
        </Item.Content>
      </Item>
    </>
  );
};

export default Episode;
