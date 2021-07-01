import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

import './style.scss';

const Menu = ({ recipes }) => (
  <nav className="menu">
    <a
      className="menu-link menu-link--active"
      href="/"
    >
      Accueil
    </a>
    {recipes.map((recipe) => (
      <a
        key={recipe.id}
        className="menu-link"
        href={`/recipe/${recipe.slug}`}
      >
        {recipe.title}
      </a>
    ))}
=======
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
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
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
<<<<<<< HEAD
=======
  loading: PropTypes.bool,
};

Menu.defaultProps = {
  loading: false,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
};

export default Menu;
