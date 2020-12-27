import {combineReducers} from 'redux';
import {registerReducer, uploadPhotoReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';

const reducer = combineReducers({
  registerReducer,
  uploadPhotoReducer,
  globalReducer,
  homeReducer,
});

export default reducer;
