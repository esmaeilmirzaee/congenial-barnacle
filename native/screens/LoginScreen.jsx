import React from 'react';
import { KeyboardAvoidingViewBase, StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const signIn = () => {};
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={require('../assets/homecast.png')}
        style={{ width: 150, height: 150 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Email'
          autoFocus
          type='email'
          text={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          type='password'
          text={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        title='Login'
        onPress={signIn}
        containerStyle={styles.button}
        style={{ backgroundColor: '#30384d', color: '#30384d' }}
      />
      <Button
        title='Not a user? Register'
        type='clear'
        containerStyle={styles.button}
        onPress={() => navigation.navigate('Register')}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
