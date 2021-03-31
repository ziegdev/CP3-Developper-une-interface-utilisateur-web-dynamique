export const SET_RECIPE_LOADING_STATE = 'SET_RECIPE_LOADING_STATE';

export const setRecipeLoadingState = (loading) => ({
  type: SET_RECIPE_LOADING_STATE,
  loading,
});

export const SET_FAV_RECIPE_LOADING_STATE = 'SET_FAV_RECIPE_LOADING_STATE';

export const setFavRecipeLoadingState = (loading) => ({
  type: SET_FAV_RECIPE_LOADING_STATE,
  loading,
});

export const FETCH_RECIPES = 'FETCH_RECIPES';

export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const SET_RECIPES = 'SET_RECIPES';

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  recipes,
});

export const FETCH_FAVORITE_RECIPES = 'FETCH_FAVORITE_RECIPES';

export const fetchFavoriteRecipes = () => ({
  type: FETCH_FAVORITE_RECIPES,
});

export const SET_FAVORITE_RECIPES = 'SET_FAVORITE_RECIPES';

export const setFavoriteRecipes = (recipes) => ({
  type: SET_FAVORITE_RECIPES,
  recipes,
});
