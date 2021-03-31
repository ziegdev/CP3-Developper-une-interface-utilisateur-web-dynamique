/* eslint-disable arrow-body-style */
// == Import : npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import api from 'src/api';

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
function Recipe({ recipe, loading, match }) {
  const [loadingState, setLoadingState] = useState(true);
  const [recipeData, setRecipeData] = useState(recipe);

  // Bonus
  useEffect(() => {
    window.scrollTo(0, 0);
    const { slug } = match.params;
    api.get(`/recipes/${slug}`)
      .then((result) => result.data)
      .then(setRecipeData)
      .finally(() => {
        setLoadingState(false);
      });
    return () => {
      setLoadingState(true);
      setRecipeData(null);
    };
  }, [recipe]);
  if (loading || loadingState) {
    return <Loading />;
  }
  if (!recipeData) {
    return <Redirect to="/error" />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipeData.title}
          thumbnail={recipeData.thumbnail}
          author={recipeData.author}
          difficulty={recipeData.difficulty}
        />
        {recipeData.ingredients && (
          <Ingredients
            list={recipeData.ingredients}
          />
        )}
        {recipeData.instructions && (
          <Instructions
            steps={recipeData.instructions}
          />
        )}
      </div>
    </Page>
  );
}

Recipe.propTypes = {
  match: PropTypes.object.isRequired,
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    ingredients: PropTypes.array,
    instructions: PropTypes.array,
  }),
  loading: PropTypes.bool,
};

Recipe.defaultProps = {
  recipe: null,
  loading: false,
};

// == Export
export default Recipe;
