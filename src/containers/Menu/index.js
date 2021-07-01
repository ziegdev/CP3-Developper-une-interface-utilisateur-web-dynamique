import { connect } from 'react-redux';
import Menu from 'src/components/Menu';

const mapStateToProps = (state) => ({
<<<<<<< HEAD
  recipes: state.recipes,
=======
  recipes: state.recipes.list,
  loading: state.recipes.loading,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
