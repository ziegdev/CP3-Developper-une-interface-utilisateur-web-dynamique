import api from 'src/api';

import {
  REHYDRATE,
  SUBMIT_LOGIN,
  LOGOUT,
  login,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case REHYDRATE: {
      const pseudo = localStorage.getItem('pseudo');
      const token = localStorage.getItem('jwtoken');
      if (pseudo && token) {
        store.dispatch(login(pseudo, token));
      }
      return next(action);
    }
    case LOGOUT: {
      // Au logout, on pense bien à supprimer les localstorage
      // Sinon on reste connecté au prochain refresh de la page
      localStorage.removeItem('pseudo');
      localStorage.removeItem('jwtoken');
      return next(action);
    }
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user;
      api.post('/login', {
        email,
        password,
      })
        .then((result) => result.data)
        .then(({ pseudo, token }) => {
          localStorage.setItem('jwtoken', token);
          localStorage.setItem('pseudo', pseudo);
          store.dispatch(login(pseudo, token));
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
