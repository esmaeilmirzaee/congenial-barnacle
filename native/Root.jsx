import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#30384d' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
};

function Root() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          options={{ title: 'Discover' }}
          name='Discover'
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ title: 'HomeCast' }}
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen name='Register' component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebedfa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

let root = {
  kPrimaryColour: '#366cf6',
  kSecondaryColour: '#f5f6fc',
  kBgLightColour: '#f2f4fc',
  kBgDarkColour: '#ebedfa',
  kBadgeColour: '#ee376e',
  kGrayColour: '#8793b2',
  kTitleTextColour: '#30384d',
  kTextColour: '#4d5875',
};
