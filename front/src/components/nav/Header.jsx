import React, { useState } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header>
      <Menu inverted size='large'>
        <Container>
          <Menu.Item
            key='home'
            name='Home'
            active={window.location.pathname === '/'}
            onClick={() => setActive(true)}
          >
            <Icon name='home'></Icon>
            Home
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              key='cart'
              name='Cart'
              active={window.location.pathname === '/cart'}
              onClick={() => setActive(true)}
            >
              <Icon name='cart'></Icon>
              Cart
            </Menu.Item>
            <Menu.Item
              key='signin'
              name='Sign In'
              active={window.location.pathname === '/login'}
              onClick={() => setActive(true)}
            >
              <Icon name='user'></Icon>
              Sign In
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </header>
  );
};

export default Header;
