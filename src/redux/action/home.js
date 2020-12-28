import axios from 'axios';
import {apiUrl} from '../../config';

export const getFoodData = (type) => async (dispatch) => {
  // jika hanya get fooddata set loading food card
  type === 'new_food'
    ? dispatch({type: 'SET_ITEM_LIST_FOOD_NEW_TASTE_LOADING', value: true})
    : type === 'popular'
    ? dispatch({type: 'SET_ITEM_LIST_FOOD_POPULAR_LOADING', value: true})
    : type === 'recommended'
    ? dispatch({type: 'SET_ITEM_LIST_FOOD_RECOMMENDED_LOADING', value: true})
    : dispatch({type: 'SET_FOOD_CARD_LOADING', value: true});

  await axios.get(apiUrl(type ? `food?types=${type}` : 'food')).then((res) => {
    console.log(res.data.data.data);
    if (type === 'new_food') {
      dispatch({type: 'SET_ITEM_LIST_FOOD_NEW_TASTE_LOADING', value: false});
      dispatch({type: 'SET_FOOD_NEW_TASTE', value: res.data.data.data});
    } else if (type === 'popular') {
      dispatch({type: 'SET_ITEM_LIST_FOOD_POPULAR_LOADING', value: false});
      dispatch({type: 'SET_FOOD_POPULAR', value: res.data.data.data});
    } else if (type === 'recommended') {
      dispatch({type: 'SET_ITEM_LIST_FOOD_RECOMMENDED_LOADING', value: false});
      dispatch({type: 'SET_FOOD_RECOMMENDED', value: res.data.data.data});
    } else {
      // Set food card loading false
      dispatch({type: 'SET_FOOD_CARD_LOADING', value: false});
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    }
  });
};
