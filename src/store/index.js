import { createStore, applyMiddleware, compose } from 'redux';
<<<<<<< HEAD

=======
import ajaxMiddleware from 'src/middlewares/ajax';
import authMiddleware from 'src/middlewares/auth';
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
<<<<<<< HEAD
  applyMiddleware(),
=======
  applyMiddleware(
    authMiddleware,
    ajaxMiddleware,
  ),
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
);

const store = createStore(reducer, enhancers);

<<<<<<< HEAD
export default store;
=======
export default store;
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
