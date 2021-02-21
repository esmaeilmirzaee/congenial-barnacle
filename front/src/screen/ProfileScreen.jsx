import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, Segment, Input, Image, Button } from 'semantic-ui-react';

const ProfileScreen = ({ history }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  console.log(userInfo);
  const handleActive = () => {};
  if (!userInfo) {
    history.push('/login');
  }

  return (
    <>
      <h1>Profile</h1>
      <Menu attached='top' tabular>
        <Menu.Item name='Profile' active={true} onClick={handleActive} />
        <Menu.Item name='Subscription' active={false} onClick={handleActive} />
        <Menu.Item name='Podcaster' active={false} onClick={handleActive} />
      </Menu>
      <Segment piled>
        <Image
          source={userInfo.avatar}
          as='a'
          size='medium'
          href=''
          target='_blank'
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
