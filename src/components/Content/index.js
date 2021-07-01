import React from 'react';
import PropTypes from 'prop-types';

import Card from 'src/components/Card';
<<<<<<< HEAD

import './style.scss';

const Content = ({ title, text, recipes }) => (
  <section className="content">
    <h1 className="content-title">{title}</h1>
    <p className="content-text">{text}</p>
    {recipes && (
=======
import Loading from 'src/components/Loading';

import './style.scss';

const Content = ({
  title, text, recipes, loading,
}) => (
  <section className="content">
    <h1 className="content-title">{title}</h1>
    <p className="content-text">{text}</p>
    {loading ? (
      <Loading />
    ) : (
      recipes && (
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
      <div className="content-list">
        {recipes.map((recipe) => (
          <Card key={recipe.id} {...recipe} />
        ))}
      </div>
<<<<<<< HEAD
=======
      )
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
    )}
  </section>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
<<<<<<< HEAD
=======
  loading: PropTypes.bool,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
};

Content.defaultProps = {
  recipes: null,
<<<<<<< HEAD
=======
  loading: false,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
};

export default Content;
