import React from 'react';
import { Button, Item } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import Rating from './Rating';
import { changePlayerStatus } from '../actions/playerActions';
import PlayerScreen from '../screen/PlayerScreen';

const Episode = ({ episode }) => {
  const dispatch = useDispatch();

  let { active } = useSelector((state) => state.playerStatus);
  console.log('active:', active);
  const handlerPlaying = (episode) => {
    dispatch(changePlayerStatus(episode));
  };

  return (
    <>
      <Item>
        <Item.Image src={episode.image} size='tiny' />
        <Item.Content>
          <Item.Header as='a'>{episode.title}</Item.Header>
          <Item.Meta>{episode.date}</Item.Meta>
          <Item.Description>{episode.description}</Item.Description>
          <Item.Extra>
            <Button
              icon='play'
              floated='right'
              basic
              circular
              color='violet'
              onClick={() => handlerPlaying(episode)}
            />
          </Item.Extra>
          <Rating value={episode.rating} text={episode.numReviews} />
        </Item.Content>
      </Item>
    </>
  );
};

export default Episode;
