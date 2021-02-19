import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Root from './Root';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Root />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
