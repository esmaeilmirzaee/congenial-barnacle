import React from 'react';
import {
  Tab,
  Divider,
  Input,
  Dropdown,
  Form,
  TextArea,
  Button,
} from 'semantic-ui-react';

export const CreatePodcast = ({
  styles,
  tags = [],
  handleTags,
  value = [],
  handleName,
  handleBrand,
  handleDescription,
  handleSubmit,
}) => (
  <Tab.Pane style={{ marginTop: '1rem' }}>
    <h1>New podcast</h1>
    <Divider />
    <Input
      fluid
      style={styles.space}
      placeholder='Choose a name'
      onChange={handleName}
    />
    <Input
      fluid
      style={styles.space}
      placeholder='Brand or organisation name'
      onChange={handleBrand}
    />
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
      style={styles.space}
      options={tags}
      value={value}
      onChange={handleTags}
    />
    <Form>
      <TextArea
        placeholder='Description (150 words allowed)'
        rows={5}
        onChange={handleDescription}
      />
      <Button
        icon='save'
        content='Create'
        color='violet'
        style={styles.space}
        onClick={handleSubmit}
        onSubmit={handleSubmit}
      />
    </Form>
  </Tab.Pane>
);
