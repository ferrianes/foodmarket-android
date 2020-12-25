import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, TextInput} from '../../components';
import {API_URL, useForm} from '../../utils';
import Axios from 'axios';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log(form);

    try {
      Axios.post(`${API_URL}login`, form)
        .then((res) => console.log('success', res))
        .catch((e) => console.log('error', e));
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type Your Email Address"
          style={styles.textInputEmail}
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <TextInput
          label="Password"
          placeholder="Type Your Password"
          style={styles.textInputPassword}
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Button
          native
          style={styles.buttonSignIn}
          variant="primary"
          title="Sign In"
          onPress={() => onSubmit()}
        />
        <Button
          native
          variant="secondary"
          title="Create New Account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  textInputEmail: {
    marginBottom: 12,
  },
  textInputPassword: {
    marginBottom: 24,
  },
  buttonSignIn: {
    marginBottom: 12,
  },
});
