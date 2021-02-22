import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Segment, Input, Image, Button } from 'semantic-ui-react';
import { fetchPosters } from '../actions/posterActions';
import Profile from '../components/Profile';
import Podcaster from '../components/Podcaster';

const ProfileScreen = ({ history, location }) => {
  const [path, setPath] = useState('profile');
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const poster = useSelector((state) => state.poster);

  console.log(location);
  const handleActive = () => {};
  if (!userInfo) {
    history.push('/login');
  }

  useEffect(() => {
    dispatch(fetchPosters(userInfo.avatar));
    if (location.pathname == '/user/profile') {
      setPath('pod');
    }
  }, [history, location]);

  return (
    <div style={{ padding: '0 0 2rem 0' }}>
      <h1>Profile</h1>
      <Menu attached='top' tabular>
        <Menu.Item
          name='Profile'
          active={path == 'profile'}
          onClick={() => setPath('profile')}
        />
        <Menu.Item
          name='Subscription'
          active={path == 'sub'}
          onClick={() => setPath('sub')}
        />
        <Menu.Item
          name='Podcaster'
          active={path == 'pod'}
          onClick={() => setPath('pod')}
        />
      </Menu>
      {path == 'profile' && <Profile userInfo={userInfo} />}
      {path == 'pod' && <Podcaster />}
    </div>
  );
};

let styles = {
  padding: { padding: '1rem 0' },
};

export default ProfileScreen;
