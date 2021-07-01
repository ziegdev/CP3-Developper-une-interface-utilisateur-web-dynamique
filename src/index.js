import React from 'react';
import ReactDom from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';

import App from 'src/components/App';
=======
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'src/containers/App';
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
<<<<<<< HEAD
    <App />
=======
    <Router>
      <App />
    </Router>
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
