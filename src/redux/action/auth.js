import axios from 'axios';
import {apiUrl, Toast} from '../../utils';
import {setLoading} from './global';

export const signInAction = (data, uploadPhotoReducer, navigation) => (
  dispatch,
) => {
  try {
    dispatch(setLoading(true));
    axios
      .post(`${apiUrl}/register`, data)
      .then(async (res) => {
        if (res.status === 200) {
          if (uploadPhotoReducer.isUpload) {
            const photoForUpload = new FormData();
            photoForUpload.append('file', uploadPhotoReducer);
            await axios.post(`${apiUrl}/user/photo`, photoForUpload, {
              headers: {
                Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
                'Content-Type': 'multipart/form-data',
              },
            });
          }
          dispatch(setLoading(false));
          Toast('Yeay! your account has been registered', 'success');
          navigation.replace('SuccessSignUp');
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

export const setUploadPhoto = (dataImage) => {
  return {type: 'SET_PHOTO', value: dataImage};
};
