export const SET_RECIPE_LOADING_STATE = 'SET_RECIPE_LOADING_STATE';

export const setRecipeLoadingState = (loading) => ({
  type: SET_RECIPE_LOADING_STATE,
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
