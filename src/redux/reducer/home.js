const initHome = {
  food: [],
  foodNewTaste: [],
  foodPopular: [],
  foodRecommended: [],
  isFoodCardLoading: false,
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_FOOD_CARD_LOADING') {
    return {
      ...state,
      isFoodCardLoading: action.value,
    };
  }
  if (action.type === 'SET_FOOD') {
    return {
      ...state,
      food: action.value,
    };
  }
  if (action.type === 'SET_FOOD_NEW_TASTE') {
    return {
      ...state,
      foodNewTaste: action.value,
    };
  }
  if (action.type === 'SET_FOOD_POPULAR') {
    return {
      ...state,
      foodPopular: action.value,
    };
  }
  if (action.type === 'SET_FOOD_RECOMMENDED') {
    return {
      ...state,
      foodRecommended: action.value,
    };
  }

  return state;
};
