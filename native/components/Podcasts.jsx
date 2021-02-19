import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPodcasts } from '../actions/podcstList';
import Podcast from './Podcast';

const Podcasts = ({ navigation }) => {
  const dispatch = useDispatch();

  let { error, loading, podcasts } = useSelector((state) => state.podcasts);
  useEffect(() => {
    dispatch(fetchPodcasts());
  }, [navigation]);

  return (
    <ScrollView style={{ flex: 1 }} horizontal>
      <FlatList
        data={podcasts}
        renderItem={({ item }) => <Podcast source={item.image} />}
        keyExtractor={(item) => item._id}
        horizontal
      />
    </ScrollView>
  );
};

export default Podcasts;

const styles = StyleSheet.create({
  container: {},
});
