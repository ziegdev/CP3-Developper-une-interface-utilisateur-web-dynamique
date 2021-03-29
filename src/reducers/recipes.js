import {
  SET_RECIPE_LOADING_STATE,
  SET_RECIPES,
} from 'src/actions/recipes';

export const initialState = {
  list: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RECIPE_LOADING_STATE:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_RECIPES:
      return {
        ...state,
        list: action.recipes,
      };
    default:
      return state;
  }
};

export default reducer;
