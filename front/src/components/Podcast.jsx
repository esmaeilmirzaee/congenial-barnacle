import React from 'react';
import { Button, Item } from 'semantic-ui-react';
import Rating from './Rating';

const Podcast = ({ podcast }) => {
  return (
    <Item.Group divided>
      <Item>
        <Item.Image src='logo192.png' size='small' />
        <Item.Content>
          <Item.Header as='a'>{podcast.title}</Item.Header>
          <Item.Meta>{podcast.date}</Item.Meta>
          <Item.Description>{podcast.description}</Item.Description>
          <Item.Extra>
            <Button icon='play' floated='right' basic circular color='violet' />
          </Item.Extra>
          <Rating value={podcast.rating} text={podcast.numReviews} />
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default Podcast;
