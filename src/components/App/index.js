<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

import Menu from 'src/components/Menu';
import Home from 'src/containers/Home';
// import Recipe from 'src/containers/Recipe';
// import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App(props) {
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Home />
      {/* <Recipe /> */}
      {/* <Error /> */}
=======
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import './style.scss';

function App({ rehydrate, fetchRecipes }) {
  useEffect(() => {
    rehydrate();
    fetchRecipes();
  }, []);

  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* Le regex ( ce qu'il y a entre parenthèse aprés le paramètre ) */}
        {/* n'est pas obligatoire du tout, c'est un filtre supplémentaire */}
        <Route path="/recipe/:slug([a-z\-\_]+)">
          <Recipe />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
    </div>
  );
}

App.propTypes = {
<<<<<<< HEAD
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
=======
  fetchRecipes: PropTypes.func,
  rehydrate: PropTypes.func,
};

App.defaultProps = {
  fetchRecipes: () => {},
  rehydrate: () => {},
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
};

export default App;
