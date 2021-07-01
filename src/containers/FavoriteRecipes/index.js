import { connect } from 'react-redux';
import {
  fetchFavoriteRecipes,
} from 'src/actions/recipes';

import FavoriteRecipes from 'src/components/FavoriteRecipes';

const mapStateToProps = (state) => ({
  recipes: state.recipes.favorites,
  loading: state.recipes.loadingFav,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites: () => dispatch(fetchFavoriteRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteRecipes);
