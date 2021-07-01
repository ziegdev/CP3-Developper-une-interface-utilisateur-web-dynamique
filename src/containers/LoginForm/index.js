import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import {
  setUserFieldValue,
  submitLogin,
  logout,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.logged,
  loggedMessage: state.user.pseudo ? `Hello ${state.user.pseudo} !` : null,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setUserFieldValue(name, value)),
  handleLogin: () => dispatch(submitLogin()),
  handleLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
