import axios from 'axios';
import {apiUrl} from '../../config';

export const getFoodData = (type) => async (dispatch) => {
  dispatch({type: 'SET_FOOD_CARD_LOADING', value: true});
  await axios.get(apiUrl(type ? `food?types=${type}` : 'food')).then((res) => {
    console.log(res.data.data.data);
    if (type === 'new_food') {
      dispatch({type: 'SET_FOOD_NEW_TASTE', value: res.data.data.data});
    } else if (type === 'popular') {
      dispatch({type: 'SET_FOOD_POPULAR', value: res.data.data.data});
    } else if (type === 'recommended') {
      dispatch({type: 'SET_FOOD_RECOMMENDED', value: res.data.data.data});
    } else {
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    }
    dispatch({type: 'SET_FOOD_CARD_LOADING', value: false});
  });
};
