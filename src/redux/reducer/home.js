const initHome = {
  food: [],
  foodNewTaste: [],
  foodPopular: [],
  foodRecommended: [],
  isFoodCardLoading: false,
  isItemListFoodNewTasteLoading: false,
  isItemListFoodPopularLoading: false,
  isItemListFoodRecommendedLoading: false,
};

export const homeReducer = (state = initHome, action) => {
  // SET LOADING
  if (action.type === 'SET_FOOD_CARD_LOADING') {
    return {
      ...state,
      isFoodCardLoading: action.value,
    };
  }
  if (action.type === 'SET_ITEM_LIST_FOOD_NEW_TASTE_LOADING') {
    return {
      ...state,
      isItemListFoodNewTasteLoading: action.value,
    };
  }
  if (action.type === 'SET_ITEM_LIST_FOOD_POPULAR_LOADING') {
    return {
      ...state,
      isItemListFoodPopularLoading: action.value,
    };
  }
  if (action.type === 'SET_ITEM_LIST_FOOD_RECOMMENDED_LOADING') {
    return {
      ...state,
      isItemListFoodRecommendedLoading: action.value,
    };
  }

  // SET ITEM
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
