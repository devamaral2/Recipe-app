import React from 'react';
import PropTypes from 'prop-types';
import * as g from '../../helpers/consts';

const RecommendedRecipeCard = ({
  image,
  name,
  index,
  dataTestId,
  titleTestId,
  id,
  type
}) => (
  <div className="recommended-card">
    <a
      className="recommended-link"
      href={type === 'food' ? `/food/${id}` : `/drink/${id}`}
      // href={ filter !== g.FILTER_FOODS ? `/foods/${id}` : `/drinks/${id}` }
    >
      <img
        src={ image }
        alt={ name }
        data-testid={ `${index}-card-img` }
        className="recommended-img"
      />
      <h3
        className="recommended-text"
        data-testid={ `${index}-${titleTestId}` }
      >
        { name }
      </h3>
    </a>
    <style jsx>{`
     .recommended-card {
       border-radius: 20px;
       box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
       margin-right: 2rem;
      }

      .recommended-link {
        display: flex;
        flex-direction: column;
        height: 12rem;
        position: relative;
        width: 12rem;
        align-items: center;
      }

      .recommended-img {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        width: 120px;
        position: absolute;
        top: -2rem;
        border-radius: 50%;
      }

      .recommended-text {
        position: absolute;
        bottom: 2rem;
      }
    `}</style>
  </div>
);

RecommendedRecipeCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  dataTestId: PropTypes.string,
}.isRequired;

RecommendedRecipeCard.defaultProps = {
  titleTestId: 'card-name',
};

export default RecommendedRecipeCard;
