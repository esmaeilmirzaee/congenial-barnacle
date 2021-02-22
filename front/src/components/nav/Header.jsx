import React, { useState } from 'react';
import { Menu, Icon, Container, Image } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  let location = useLocation();
  const [path, setPath] = useState(location.pathname);

  const userLogin = useSelector((state) => state.userLogin);
  let { poster } = useSelector((state) => state.avatar);
  let { userInfo } = userLogin;

  const handleProfile = () => {
    console.log('profile');
  };

  return (
    <header>
      <Menu size='large'>
        <Container>
          <Menu.Item>
            <a href='https://homecast.ir' style={{ color: '#30384D' }}>
              <Image
                src={'http://localhost:5000/uploads/p/HomeCast.svg'}
                size='tiny'
                as='a'
                header
                style={{ marginRight: '1rem' }}
              />
              HomeCast
            </a>
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
              key='upload'
              name='Upload'
              active={path === '/cart'}
              onClick={(e) => setPath('/cart')}
              as={Link}
              to='/cart'
            >
              <Icon name='upload'></Icon>
              Upload
            </Menu.Item>
            {userInfo ? (
              <Menu.Item>
                <a href='/profile'>
                  <img
                    style={{
                      cursor: 'pointer',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                    }}
                    src={poster}
                  />
                </a>
              </Menu.Item>
            ) : (
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
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </header>
  );
};

export default Header;
