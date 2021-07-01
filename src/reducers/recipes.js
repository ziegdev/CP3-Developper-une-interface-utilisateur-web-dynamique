<<<<<<< HEAD
import data from 'src/data';

export const initialState = {
  list: data,
=======
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
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
<<<<<<< HEAD
=======
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
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
    default:
      return state;
  }
};

export default reducer;
