import React, { useState } from 'react';
import { Menu, Icon, Container, Image } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {
  let location = useLocation();
  const [path, setPath] = useState(location.pathname);

  return (
    <header>
      <Menu size='large'>
        <Container>
          <Menu.Item>
            <Image
              src={'logo192.png'}
              size='mini'
              as='a'
              href='https://homecast.ir'
            />
          </Menu.Item>
          <Menu.Item
            key='home'
            name='Home'
            active={path === '/'}
            onClick={(e) => setPath('/')}
            as={Link}
            to='/'
          >
            <Icon name='home'></Icon>
            Home
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              key='cart'
              name='Cart'
              active={path === '/cart'}
              onClick={(e) => setPath('/cart')}
              as={Link}
              to='/cart'
            >
              <Icon name='cart'></Icon>
              Cart
            </Menu.Item>
            <Menu.Item
              key='signin'
              name='Sign In'
              active={path === '/login'}
              onClick={(e) => setPath('/login')}
              as={Link}
              to='/login'
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