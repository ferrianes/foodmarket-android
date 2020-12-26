const initStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
    };
  }
  return state;
};

const initStateUploadPhoto = {
  type: '',
  uri: '',
  name: '',
  isUpload: false,
};

export const uploadPhotoReducer = (state = initStateUploadPhoto, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      type: action.value.type,
      uri: action.value.uri,
      name: action.value.name,
      isUpload: true,
    };
  }
  return state;
};
