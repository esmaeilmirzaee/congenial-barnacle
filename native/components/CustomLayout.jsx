import React from 'react';
import { ListItem } from 'react-native-elements';

const CustomLayout = () => {
  return (
    <ListItem.Content>
      <ListItem.Title style={{ fontWeight: '800' }}>
        Custom layout
      </ListItem.Title>
      <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
        Description
      </ListItem.Subtitle>
    </ListItem.Content>
  );
};

export default CustomLayout;

const styles = StyleSheet.create({});
