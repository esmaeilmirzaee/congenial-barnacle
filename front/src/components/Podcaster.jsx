import React from 'react';
import {
  Dropdown,
  Divider,
  Input,
  TextArea,
  Form,
  Button,
  Tab,
} from 'semantic-ui-react';

export const CreatePodcast = () => {
  return (
    <Tab.Pane>
      <h1>Upload a new podcast</h1>
    </Tab.Pane>
  );
};

export const CreateEpisode = () => {
  return (
    <Tab.Pane>
      <h1>Create a new episode</h1>
    </Tab.Pane>
  );
};

const panes = [
  {
    menuItem: 'Podcast',
    render: () => (
      <Tab.Pane style={{ marginTop: '1rem' }}>
        <h1>New podcast</h1>
        <Divider />
        <Dropdown
          fluid
          search
          selection
          closeOnBlur
          closeOnEscape
          closeOnChange
          allowAdditions
          multiple
          placeholder='Keywords (3 items allowed)'
        />
        <Input fluid style={styles.space} placeholder="Episode's name" />
        <Form>
          <TextArea placeholder='Description (150 words allowed)' rows={5} />
          <Button
            icon='save'
            content='Create'
            color='violet'
            style={styles.space}
          />
        </Form>
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Episode',
    render: () => (
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
    ),
  },
];

const Podcaster = () => {
  return (
    <>
      <Tab
        menu={{ fluid: true, vertical: true, tabular: true }}
        panes={panes}
      />
    </>
  );
};

export default Podcaster;

const styles = {
  space: {
    margin: '1rem 0',
  },
};
