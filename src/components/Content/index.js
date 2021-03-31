import React from 'react';
import PropTypes from 'prop-types';

import Card from 'src/components/Card';
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
      <div className="content-list">
        {recipes.map((recipe) => (
          <Card key={recipe.id} {...recipe} />
        ))}
      </div>
      )
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
  loading: PropTypes.bool,
};

Content.defaultProps = {
  recipes: null,
  loading: false,
};

export default Content;
