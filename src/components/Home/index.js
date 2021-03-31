import React from 'react';
import PropTypes from 'prop-types';
import {
  getTitleFromRecipesNumber,
} from 'src/selectors/recipes';
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import Loading from 'src/components/Loading';
import FavoriteRecipes from 'src/components/FavoriteRecipes';
import './styles.scss';

const Home = ({ recipes, loading, isLogged }) => (
  <Page>
    <AppHeader />
    {loading ? (
      <Loading />
    ) : (
      <>
        {isLogged && (
          <FavoriteRecipes />
        )}
        <Content
          title={getTitleFromRecipesNumber(recipes.length)}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
          recipes={recipes}
        />
      </>
    )}
  </Page>
);

Home.propTypes = {
  recipes: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  isLogged: PropTypes.bool,
};

Home.defaultProps = {
  loading: false,
  isLogged: false,
};

export default Home;
