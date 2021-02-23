import React from 'react';
import {
  Tab,
  Dropdown,
  Input,
  Form,
  TextArea,
  Button,
} from 'semantic-ui-react';

export const CreateEpisode = (styles) => (
  <Tab.Pane style={{ marginTop: '1rem' }}>
    <Dropdown
      fluid
      search
      selection
      closeOnBlur
      closeOnEscape
      closeOnChange
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
  </Tab.Pane>
);
