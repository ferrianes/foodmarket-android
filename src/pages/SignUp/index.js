import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Header, TextInput} from '../../components';
import {emailIsValid, Toast, useForm} from '../../utils';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (validate()) {
      dispatch({type: 'SET_REGISTER', value: form});
      navigation.navigate('SignUpAddress');
    }
  };

  const validate = () => {
    let isValid = true;

    if (form.name.length === 0) {
      setNameError('The name field is required.');
      isValid = false;
    } else {
      if (form.name.length > 20) {
        setNameError('The name field cannot exceed 20 characters in length.');
        isValid = false;
      } else {
        setNameError(false);
      }
    }

    if (form.email.length === 0) {
      setEmailError('The Email field is required.');
      isValid = false;
    } else {
      if (!emailIsValid(form.email)) {
        setEmailError('The email field must contain a valid email address.');
        isValid = false;
      } else {
        setEmailError(false);
      }
    }

    if (form.password.length === 0) {
      setPasswordError('The Password field is required.');
      isValid = false;
    } else {
      if (form.password.length < 8) {
        setPasswordError(
          'The Password field must be at least 8 characters in length.',
        );
        isValid = false;
      } else {
        setPasswordError(false);
      }
    }

    if (isValid) {
      return true;
    } else {
      Toast('Oops... Something went wrong', 'danger');
      return false;
    }
  };

  return (
    <ScrollView style={styles.page}>
      <Header
        title="Sign Up"
        subTitle="Register and eat"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          <View style={styles.borderPhoto}>
            <View style={styles.addPhotoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput
          label="Full Name"
          placeholder="Type Your Full Name"
          style={styles.textInput}
          value={form.name}
          onChangeText={(value) => setForm('name', value)}
          errorMessage={nameError}
        />
        <TextInput
          label="Email Address"
          placeholder="Type Your Email Address"
          style={styles.textInput}
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
          errorMessage={emailError}
        />
        <TextInput
          label="Password"
          placeholder="Type Your Password"
          style={styles.textInputPassword}
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          errorMessage={passwordError}
          secureTextEntry
        />
        <Button
          native
          variant="primary"
          marginBottom={12}
          title="Continue"
          onPress={onSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
  photoContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  textInput: {
    marginBottom: 16,
  },
  textInputPassword: {
    marginBottom: 24,
  },
});
