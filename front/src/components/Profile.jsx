import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react';

const Profile = ({ userInfo }) => {
  return (
    <>
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

export default Profile;

const styles = {
  padding: {
    padding: '1rem 0',
  },
};
