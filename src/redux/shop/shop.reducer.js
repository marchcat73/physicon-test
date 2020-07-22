import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  textbooks: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_TEXTBOOKS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_TEXTBOOKS_SUCCESS:
      return {
        ...state,
        textbooks: action.payload,
        isFetching: false,
      };
    case ShopActionTypes.FETCH_TEXTBOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
