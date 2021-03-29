/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import : local
// Composants
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Loading from 'src/components/Loading';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './style.scss';

// == Composant
function Recipe({ recipe, loading }) {
  if (loading) {
    return <Loading />;
  }
  if (!recipe) {
    return <Redirect to="/error" />;
  }
  // Bonus
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [recipe]);
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </Page>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    instructions: PropTypes.array.isRequired,
  }),
  loading: PropTypes.bool,
};

Recipe.defaultProps = {
  recipe: null,
  loading: false,
};

// == Export
export default Recipe;
