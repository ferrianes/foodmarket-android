import {combineReducers} from 'redux';
import {registerReducer, uploadPhotoReducer} from './auth';
import {globalReducer} from './global';

const reducer = combineReducers({
  registerReducer,
  uploadPhotoReducer,
  globalReducer,
});

export default reducer;
