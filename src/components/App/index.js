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
    </div>
  );
}

App.propTypes = {
  fetchRecipes: PropTypes.func,
  rehydrate: PropTypes.func,
};

App.defaultProps = {
  fetchRecipes: () => {},
  rehydrate: () => {},
};

export default App;
