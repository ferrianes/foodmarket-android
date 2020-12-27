import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Header, TextInput} from '../../components';
import {signInAction} from '../../redux/action/auth';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  const {isError, messageError} = useSelector((state) => state.globalReducer);

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

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
          errorMessage={messageError.email?.[0]}
        />
        <TextInput
          label="Password"
          placeholder="Type Your Password"
          style={styles.textInputPassword}
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
          errorMessage={messageError.password?.[0]}
        />
        <Button
          native
          style={styles.buttonSignIn}
          variant="primary"
          title="Sign In"
          onPress={() => dispatch(signInAction(form, navigation))}
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
