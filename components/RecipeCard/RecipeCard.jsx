import React from 'react';
import PropTypes from 'prop-types';
import * as g from '../../helpers/consts';
import './recipeCard.module.css';

const RecipeCard = ({ image, name, index, dataTestId, titleTestId, id, filter }) => (
  <Link
    className="link"
    data-testid={ dataTestId }
    to={ filter === g.FILTER_FOODS ? `/foods/${id}` : `/drinks/${id}` }
  >
    <div className="card"> </div>
    <img
      src={ image }
      alt={ name }
      data-testid={ `${index}-card-img` }
      className="card-img"
    />
    <h3
      className="card-name"
      data-testid={ `${index}-${titleTestId}` }
    >
      { name }
    </h3>
  </Link>
);
RecipeCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  dataTestId: PropTypes.string,
  titleTestId: PropTypes.string,
}.isRequired;

RecipeCard.defaultProps = {
  titleTestId: 'card-name',
};

export default RecipeCard;
