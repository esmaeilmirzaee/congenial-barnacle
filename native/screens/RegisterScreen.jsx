import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Text, Input, Button, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRePassword] = React.useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back to login',
    });
  }, [navigation]);

  const register = () => {};
  return (
    <KeyboardAvoidingView behavior='position' style={styles.container}>
      <StatusBar style='light' />
      <Text h2>Welcome to HomeCast</Text>
      <Image
        source={require('../assets/icon.png')}
        style={{ width: 200, height: 300 }}
      />
      <Input style={styles.input} placeholder='Name' type='text' />
      <Input style={styles.input} placeholder='Email' type='email' />
      <Input
        style={styles.input}
        placeholder='Password'
        type='password'
        secureTextEntry
      />
      <Input
        style={styles.input}
        placeholder='Retype your password'
        type='password'
        secureTextEntry
        onSubmitEditing={register}
      />
      <Button
        containerStyle={styles.button}
        title='Register'
        onPress={register}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    margin: 5,
    color: '#30384d',
  },
  input: {},
  button: { width: 300, color: '#30384d' },
});
