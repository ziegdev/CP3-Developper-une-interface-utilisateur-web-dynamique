import api from 'src/api';

import {
  FETCH_RECIPES,
  FETCH_FAVORITE_RECIPES,
  setRecipeLoadingState,
  setFavRecipeLoadingState,
  setFavoriteRecipes,
  setRecipes,
} from 'src/actions/recipes';

import {
  LOGIN,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      // On ajoute le token par défaut pour l'instance de axios
      api.defaults.headers.common.Authorization = `Bearer ${action.token}`;
      return next(action);
    case FETCH_RECIPES:
      store.dispatch(setRecipeLoadingState(true));
      api.get('/recipes')
        .then((result) => result.data)
        .then((recipes) => {
          store.dispatch(setRecipes(recipes));
        })
        .finally(() => {
          store.dispatch(setRecipeLoadingState(false));
        });
      return next(action);
    case FETCH_FAVORITE_RECIPES:
      store.dispatch(setFavRecipeLoadingState(true));
      api.get('/favorites')
        .then((result) => result.data)
        .then(({ favorites }) => {
          store.dispatch(setFavoriteRecipes(favorites));
        })
        .finally(() => {
          store.dispatch(setFavRecipeLoadingState(false));
        });
      return next(action);
    default:
      return next(action);
  }
};
