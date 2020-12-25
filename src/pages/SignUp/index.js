import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BottomSheet, Button, Header, TextInput} from '../../components';
import {emailIsValid, Toast, useForm} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {IcCamera, IcGallery} from '../../assets';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [photo, setPhoto] = useState('');

  const dispatch = useDispatch();
  const {isBottomSheetOpen} = useSelector((state) => state.globalReducer);

  const onPressCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        if (!response.didCancel) {
          setPhoto({uri: response.uri});
          dispatch({type: 'SET_BOTTOM_SHEET', value: false});
        }
      },
    );
  };

  const onPressGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        if (!response.didCancel) {
          setPhoto({uri: response.uri});
          dispatch({type: 'SET_BOTTOM_SHEET', value: false});
        }
      },
    );
  };

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
    <View style={styles.page}>
      <ScrollView>
        <Header
          title="Sign Up"
          subTitle="Register and eat"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => dispatch({type: 'SET_BOTTOM_SHEET', value: true})}>
            <View style={styles.photoContainer}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={photo} style={styles.addPhotoContainer} />
                ) : (
                  <View style={styles.addPhotoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
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
      {isBottomSheetOpen && (
        <BottomSheet>
          <Pressable
            android_ripple={{color: 'silver'}}
            style={styles.itemsContainer}
            onPress={onPressCamera}>
            <View style={styles.items}>
              <IcCamera height={30} width={30} />
              <Text style={styles.textItems}>Choose From Camera</Text>
            </View>
          </Pressable>
          <Pressable
            android_ripple={{color: 'silver'}}
            style={styles.itemsContainer}
            onPress={onPressGallery}>
            <View style={styles.items}>
              <IcGallery height={30} width={30} />
              <Text style={styles.textItems}>Choose From Gallery</Text>
            </View>
          </Pressable>
        </BottomSheet>
      )}
    </View>
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
  itemsContainer: {
    height: '33.333%',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textItems: {
    fontFamily: 'Poppins-Regular',
    includeFontPadding: false,
    color: '#020202',
    marginLeft: 12,
  },
});
