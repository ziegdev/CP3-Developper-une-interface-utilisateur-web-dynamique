import { connect } from 'react-redux';
import App from 'src/components/App';

import {
  fetchRecipes,
} from 'src/actions/recipes';
import { rehydrate } from 'src/actions/user';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
  rehydrate: () => dispatch(rehydrate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
