import React from 'react';
import { Icon, Item, Segment } from 'semantic-ui-react';

const PlayerScreen = ({ episode }) => {
  return (
    <div className='my__player' id='my__player'>
      <div className='my__image'>
        <img className='my__image' src={episode.image} alt={episode.name} />
      </div>
      <div className='my__info'>
        <div className='my__title'>{episode.title}</div>
        <div className='my__subtitle'>
          {episode.description.substring(0, 25)}
        </div>
      </div>
      <div className='my__control'>
        <Icon name='backward' />
        <Icon name='play' />
        <Icon name='forward' />
      </div>
      <div className='my__more'>
        <span className='my__timer'>{episode.duration}</span>
        <Icon name='volume up' />
        <Icon name='heart' />
      </div>
    </div>
  );
};

export default PlayerScreen;

{
  /* <Segment
      raised
      stacked
      style={{ position: 'absolute', bottom: '0', left: '0' }}
    >
      <Item>
        <Item.Image src={episode.image} alt={episode.name} size='tiny' />
      </Item>
      <Item.Header>{episode.name}</Item.Header>
      <Item.Description>{episode.description}</Item.Description>
      <Item>
        <Icon name='backward' />
        <Icon name='play' />
        <Icon name='forward' />
      </Item>
      <Item>
        <div>{episode.duration}</div>
        <Icon name='volume down' />
        <Icon name='heart outline' />
      </Item>
    </Segment> */
}
