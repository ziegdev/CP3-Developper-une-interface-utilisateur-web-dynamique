import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
<<<<<<< HEAD

import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state) => ({
  recipe: findRecipe(state.recipes.list, 'crepes-raffinees'),
});
=======
import { withRouter } from 'react-router-dom';

import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return {
    recipe: findRecipe(state.recipes.list, slug),
    loading: state.recipes.loading,
  };
};
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

const containerWithRouter = withRouter(container);

<<<<<<< HEAD
export default containerWithRouter;
=======
export default containerWithRouter;
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
