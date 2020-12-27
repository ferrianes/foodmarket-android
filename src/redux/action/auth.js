import axios from 'axios';
import {apiUrl} from '../../config';
import {getData, storeData, Toast} from '../../utils';
import {setLoading} from './global';

export const signUpAction = (data, uploadPhotoReducer, navigation) => (
  dispatch,
) => {
  try {
    dispatch(setLoading(true));
    axios
      .post(apiUrl('register'), data)
      .then(async (res) => {
        // set store user
        const user = res.data.data.user;

        // store token
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        storeData('token', {value: token});

        if (res.status === 200) {
          if (uploadPhotoReducer.isUpload) {
            const photoForUpload = new FormData();
            photoForUpload.append('file', uploadPhotoReducer);
            await axios
              .post(apiUrl('user/photo'), photoForUpload, {
                headers: {
                  Authorization: token,
                  'Content-Type': 'multipart/form-data',
                },
              })
              .then((resUpload) => {
                user.profile_photo_url = `http://192.168.0.7:8000/storage/${resUpload.data.data[0]}`;
                storeData('userProfile', user);
              })
              .catch((e) => {
                Toast('Sorry your photo profile failed to upload', 'danger');
              });
          } else {
            storeData('userProfile', user);
          }
          navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          dispatch(setLoading(false));
        }
      })
      .catch((e) => {
        dispatch(setLoading(false));
        Toast(e?.response?.data?.data?.message, 'danger');
      });
  } catch (e) {
    dispatch(setLoading(false));
    Toast('Oops... Something went wrong', 'danger');
  }
};

export const signInAction = (form, navigation) => (dispatch) => {
  dispatch(setLoading(true));
  try {
    axios
      .post(apiUrl('login'), form)
      .then((res) => {
        // store token
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        storeData('token', {value: token});

        // store user
        const user = res.data.data.user;
        storeData('userProfile', user);

        // Move screen
        dispatch(setLoading(false));
        dispatch({
          type: 'SET_ERROR',
          value: {isError: false, messageError: ''},
        });
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      })
      .catch((e) => {
        dispatch(setLoading(false));
        console.log(e.response);
        const dataError =
          e?.response?.data?.data?.error || e?.response?.data?.data?.message;
        dispatch({
          type: 'SET_ERROR',
          value: {isError: true, messageError: dataError},
        });
        getData('userProfile').then((res) => console.log(res));
        Toast('Oopss.. Please check your credentials', 'danger');
      });
  } catch (e) {
    dispatch(setLoading(false));
    Toast('Oopss.. Something went wrong', 'danger');
  }
};

export const setUploadPhoto = (dataImage) => {
  return {type: 'SET_PHOTO', value: dataImage};
};
