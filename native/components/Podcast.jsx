import React from 'react';
import { Image } from 'react-native-elements';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Podcast = ({ source }) => {
  let img = `../assets/img/${source.image.split('/')[3]}`;
  console.log(img);
  return (
    <TouchableOpacity>
      <Image style={styles.image} source={require(img)} />
    </TouchableOpacity>
  );
};

export default Podcast;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    margin: 10,
  },
});
