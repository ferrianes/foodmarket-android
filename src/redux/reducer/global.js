const initGlobalState = {
  isLoading: false,
  isBottomSheetOpen: false,
  isError: false,
  messageError: '',
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      messageError: action.value.messageError,
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
