import React from 'react';
import {
  Dropdown,
  Divider,
  Input,
  TextArea,
  Form,
  Button,
} from 'semantic-ui-react';

const Podcaster = () => {
  return (
    <>
      <h1>Upload your podcast</h1>
      <Divider />
      <Dropdown
        fluid
        search
        selection
        closeOnBlur
        closeOnEscape
        closeOnChange
        allowAdditions
        placeholder='Please specify your podcast'
      />
      <Input fluid style={styles.space} placeholder="Episode's name" />
      <Form>
        <TextArea placeholder='Description' rows={5} />
        <Button
          icon='upload'
          content='Upload'
          color='violet'
          style={styles.space}
        />
      </Form>
    </>
  );
};

export default Podcaster;

const styles = {
  space: {
    margin: '1rem 0',
  },
};
