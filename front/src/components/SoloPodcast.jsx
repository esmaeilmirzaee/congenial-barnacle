import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item, Header, Icon, Button } from 'semantic-ui-react';

import { soloPodcast } from '../actions/podcastActions';

const SoloPodcast = ({ id }) => {
  const [subscribed, setSubscribed] = useState(false);
  const dispatch = useDispatch();
  let { loading, error, podcast } = useSelector((state) => state.soloPodcast);
  useEffect(() => {
    dispatch(soloPodcast(id));
  }, [dispatch, id]);
  return (
    <>
      <Item>
        <Header className='ui centered' size='large'>
          {podcast.name}
        </Header>
        <Item.Image
          className='ui right floated'
          src={podcast.image}
          alt={podcast.name}
        />
        <Item.Content>
          <Item.Description>{podcast.description}</Item.Description>
          <Item.Extra>
            <Button
              content={subscribed ? 'Subscribed' : 'Subscribe'}
              icon='bookmark'
              onClick={() => setSubscribed(!subscribed)}
              color='violet'
            />

            <Button
              icon='heart'
              content='Like'
              color='violet'
              label={{
                as: 'a',
                basic: true,
                pointing: 'right',
                content: podcast.rating,
                color: 'violet',
              }}
              labelPosition='left'
            />
            <Button icon='comment' color='violet'></Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </>
  );
};

export default SoloPodcast;
