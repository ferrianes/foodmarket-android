import axios from 'axios';
import {apiUrl} from '../../config';

export const getFoodData = () => (dispatch) => {
  axios.get(apiUrl('food')).then((res) => {
    console.log(res.data.data.data);
    dispatch({type: 'SET_FOOD', value: res.data.data.data});
  });
};
