<<<<<<< HEAD
export const initialState = {
  logged: false,
=======
import {
  SET_USER_FIELD_VALUE,
  LOGIN,
  LOGOUT,
} from 'src/actions/user';

export const initialState = {
  email: '',
  password: '',
  logged: false,
  token: null,
  pseudo: null,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
<<<<<<< HEAD
=======
    case SET_USER_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN:
      return {
        ...state,
        pseudo: action.pseudo,
        token: action.token,
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
        pseudo: null,
        token: null,
        logged: false,
      };
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
    default:
      return state;
  }
};

export default reducer;
