import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Home = ({ recipes }) => (
  <Page>
    <AppHeader />
    <Content
      title="Les recettes oRecipes"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
      recipes={recipes}
=======
import {
  getTitleFromRecipesNumber,
} from 'src/selectors/recipes';
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import FavoriteRecipes from 'src/containers/FavoriteRecipes';
import './styles.scss';

const Home = ({ recipes, loading, isLogged }) => (
  <Page>
    <AppHeader />
    {isLogged && (
      <FavoriteRecipes />
    )}
    <Content
      title={getTitleFromRecipesNumber(recipes.length)}
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
      recipes={recipes}
      loading={loading}
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
    />
  </Page>
);

Home.propTypes = {
  recipes: PropTypes.array.isRequired,
<<<<<<< HEAD
=======
  loading: PropTypes.bool,
  isLogged: PropTypes.bool,
};

Home.defaultProps = {
  loading: false,
  isLogged: false,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
};

export default Home;
