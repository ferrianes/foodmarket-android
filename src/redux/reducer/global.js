const initGlobalState = {
  isError: false,
  isLoading: false,
  isBottomSheetOpen: false,
  message: 'Error',
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }

  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }

  if (action.type === 'SET_BOTTOM_SHEET') {
    return {
      ...state,
      isBottomSheetOpen: action.value,
    };
  }

  return state;
};
