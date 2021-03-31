import api from 'src/api';

import {
  SUBMIT_LOGIN,
  login,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user;
      api.post('/login', {
        email,
        password,
      })
        .then((result) => result.data)
        .then(({ pseudo, token }) => {
          store.dispatch(login(pseudo, token));
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
