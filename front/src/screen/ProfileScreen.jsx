import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Segment, Input, Image, Button } from 'semantic-ui-react';
import { fetchPosters } from '../actions/posterActions';

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const poster = useSelector((state) => state.poster);

  console.log(poster);
  const handleActive = () => {};
  if (!userInfo) {
    history.push('/login');
  }

  useEffect(() => {
    dispatch(fetchPosters(userInfo.avatar));
  }, [history]);

  return (
    <>
      <h1>Profile</h1>
      <Menu attached='top' tabular>
        <Menu.Item name='Profile' active={true} onClick={handleActive} />
        <Menu.Item name='Subscription' active={false} onClick={handleActive} />
        <Menu.Item name='Podcaster' active={false} onClick={handleActive} />
      </Menu>
      <Segment piled>
        <img
          src='http://localhost:5000/uploads/p/default_avatar.png'
          style={{
            width: '200px',
            height: '200px',
          }}
        />
        <Input style={styles.padding} fluid focus value={userInfo.name} />
        <Input style={styles.padding} fluid value={userInfo.email} />
        <Input style={styles.padding} fluid placeholder='Password' />
        <Input style={styles.padding} fluid placeholder='Retype password' />
        <Button icon='save' content='Update' color='violet' />
      </Segment>
    </>
  );
};

let styles = {
  padding: { padding: '1rem 0' },
};

export default ProfileScreen;
