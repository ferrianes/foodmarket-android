import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Header, Select, TextInput} from '../../components';
import {apiUrl, Toast, useForm} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phone_number: '',
    address: '',
    house_number: '',
    city: 'Jakarta',
  });

  const dispatch = useDispatch();
  const {registerReducer, uploadPhotoReducer} = useSelector((state) => state);

  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };

    try {
      dispatch({type: 'SET_LOADING', value: true});
      axios
        .post(`${apiUrl}register`, data)
        .then(async (res) => {
          if (res.status === 200) {
            if (uploadPhotoReducer.isUpload) {
              const photoForUpload = new FormData();
              photoForUpload.append('file', uploadPhotoReducer);
              await axios.post(`${apiUrl}user/photo`, photoForUpload, {
                headers: {
                  Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
                  'Content-Type': 'multipart/form-data',
                },
              });
            }
            dispatch({type: 'SET_LOADING', value: false});
            Toast('Yeay! your account has been registered', 'success');
            navigation.replace('SuccessSignUp');
          }
        })
        .catch((e) => {
          dispatch({type: 'SET_LOADING', value: false});
          Toast(e?.response?.data?.data?.message, 'danger');
        });
    } catch (e) {
      dispatch({type: 'SET_LOADING', value: false});
      Toast('Oops... Something went wrong', 'danger');
    }
  };

  return (
    <ScrollView style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it's valid"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TextInput
          label="Phone No."
          placeholder="Type Your Phone Number"
          style={styles.textInput}
          value={form.phone_number}
          onChangeText={(value) => setForm('phone_number', value)}
        />
        <TextInput
          label="Address"
          placeholder="Type Your Address"
          style={styles.textInput}
          value={form.address}
          onChangeText={(value) => setForm('address', value)}
        />
        <TextInput
          label="House No."
          placeholder="Type Your House Number"
          style={styles.textInput}
          value={form.house_number}
          onChangeText={(value) => setForm('house_number', value)}
        />
        <Select
          style={styles.select}
          label="City"
          value={form.city}
          onSelectChange={(value) => setForm('city', value)}
        />
        <Button
          native
          variant="primary"
          marginBottom={12}
          title="Sign Up Now"
          onPress={onSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
  textInput: {
    marginBottom: 16,
  },
  select: {
    marginBottom: 24,
  },
});
