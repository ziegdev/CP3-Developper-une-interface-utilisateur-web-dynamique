import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

=======
import {
  Link,
} from 'react-router-dom';
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
import './style.scss';

const Card = ({
  thumbnail,
  title,
<<<<<<< HEAD
  level,
=======
  difficulty,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
  slug,
}) => (
  <article className="card">
    <img className="card-img" src={thumbnail} alt={title} />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
<<<<<<< HEAD
      <p className="card-desc">Difficulté : {level}</p>
      <a href={`/recipe/${slug}`} className="card-link">Voir la recette</a>
=======
      <p className="card-desc">Difficulté : {difficulty}</p>
      <Link to={`/recipe/${slug}`} className="card-link">Voir la recette</Link>
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
    </div>
  </article>
);

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
<<<<<<< HEAD
  level: PropTypes.string.isRequired,
=======
  difficulty: PropTypes.string.isRequired,
>>>>>>> 9dd55619a1507129cd1dc56814dcedca3f4d4c96
  slug: PropTypes.string.isRequired,
};

export default Card;
