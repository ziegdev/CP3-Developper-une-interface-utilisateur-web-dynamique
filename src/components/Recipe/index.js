/* eslint-disable arrow-body-style */
// == Import : npm
<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
=======
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import api from 'src/api';
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96

// == Import : local
// Composants
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
<<<<<<< HEAD
=======
import Loading from 'src/components/Loading';
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './style.scss';

// == Composant
<<<<<<< HEAD
function Recipe({ recipe }) {
  if (!recipe) {
=======
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
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
    return <Redirect to="/error" />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
<<<<<<< HEAD
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
=======
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
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
      </div>
    </Page>
  );
}

Recipe.propTypes = {
<<<<<<< HEAD
=======
  match: PropTypes.object.isRequired,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
<<<<<<< HEAD
    ingredients: PropTypes.array.isRequired,
    instructions: PropTypes.array.isRequired,
  }),
=======
    ingredients: PropTypes.array,
    instructions: PropTypes.array,
  }),
  loading: PropTypes.bool,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
};

Recipe.defaultProps = {
  recipe: null,
<<<<<<< HEAD
=======
  loading: false,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
};

// == Export
export default Recipe;
