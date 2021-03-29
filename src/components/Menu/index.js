import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';

import './style.scss';

const Menu = ({ recipes, loading }) => (
  <nav className="menu">
    <NavLink
      className="menu-link"
      activeClassName="menu-link--active"
      exact
      to="/"
    >
      Accueil
    </NavLink>
    {recipes.map((recipe) => (
      <NavLink
        key={recipe.id}
        className="menu-link"
        activeClassName="menu-link--active"
        to={`/recipe/${recipe.slug}`}
      >
        {recipe.title}
      </NavLink>
    ))}
    {loading && (
      <div className="menu-loading">
        Chargement du menu en cours ...
      </div>
    )}
  </nav>
);

Menu.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool,
};

Menu.defaultProps = {
  loading: false,
};

export default Menu;
