import {
  SET_RECIPE_LOADING_STATE,
  SET_FAV_RECIPE_LOADING_STATE,
  SET_RECIPES,
  SET_FAVORITE_RECIPES,
} from 'src/actions/recipes';

export const initialState = {
  list: [],
  favorites: [],
  loading: true,
  loadingFav: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RECIPE_LOADING_STATE:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_FAV_RECIPE_LOADING_STATE:
      return {
        ...state,
        loadingFav: action.loading,
      };
    case SET_RECIPES:
      return {
        ...state,
        list: action.recipes,
      };
    case SET_FAVORITE_RECIPES:
      return {
        ...state,
        favorites: action.recipes,
      };
    default:
      return state;
  }
};

export default reducer;
