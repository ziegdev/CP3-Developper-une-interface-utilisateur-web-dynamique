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
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
