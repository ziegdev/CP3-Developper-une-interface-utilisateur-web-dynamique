import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  recipes: state.recipes.list,
<<<<<<< HEAD
=======
  loading: state.recipes.loading,
  isLogged: state.user.logged,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
