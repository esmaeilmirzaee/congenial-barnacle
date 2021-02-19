import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

import Podcasts from '../components/Podcasts';

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={styles.container}
      screenOptions={{ headerTitleStyle: { color: 'white' } }}
    >
      <Image
        source={require('../assets/homecast.png')}
        style={{ width: 50, height: 50, resizeMode: 'contain' }}
      />
      <>
        <Podcasts />
      </>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ebedfa',
    alignItems: 'center',
  },
});
