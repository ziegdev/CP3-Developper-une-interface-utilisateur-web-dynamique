import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Content from 'src/components/Content';

const FavoriteRecipes = ({ recipes, fetchFavorites, loading }) => {
  useEffect(() => {
    fetchFavorites();
  }, []);
  return (
    <Content
      title="Vos recettes favorites"
      text="Consultez vos recettes préférées"
      recipes={recipes}
      loading={loading}
    />
  );
};

FavoriteRecipes.propTypes = {
  fetchFavorites: PropTypes.func.isRequired,
  recipes: PropTypes.array,
  loading: PropTypes.bool,
};

FavoriteRecipes.defaultProps = {
  recipes: [],
  loading: false,
};

export default FavoriteRecipes;
