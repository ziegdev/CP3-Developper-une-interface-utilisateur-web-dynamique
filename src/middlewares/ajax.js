import api from 'src/api';

import {
  FETCH_RECIPES,
  setRecipeLoadingState,
  setRecipes,
} from 'src/actions/recipes';

export default (store) => (next) => (action) => {
  switch (action.type) {
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
    default:
      return next(action);
  }
};
