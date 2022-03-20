import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import * as g from '../../helpers/consts';
import { AiOutlineShareAlt } from "react-icons/ai";

const DoneRecipeCard = ({ index, recipe }) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const { id, type, nationality, name, image, doneDate, tags } = recipe;
  const category = type === 'food' ? recipe.category : recipe.alcoholicOrNot;

  const copyToClipboard = () => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setLinkCopied(true);
  };

  return (
    <div>
      <Link key={ index } to={ `/${recipe.type}s/${recipe.id}` }>
        <img
          src={ image }
          data-testid={ `${index}-horizontal-image` }
          alt={ name }
          style={ { width: '100%' } }
        />
        <p data-testid={ `${index}-horizontal-top-text` }>
          { `${nationality} - ${category}` }
        </p>

        <h2 data-testid={ `${index}-horizontal-name` }>
          { name }
        </h2>

        <h3 data-testid={ `${index}-horizontal-done-date` }>
          { doneDate }
        </h3>

        {
          tags.map((tag, tagIndex) => {
            if (tagIndex <= g.MAX_NUMBER_OF_TAGS) {
              return (
                <div key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
                  { tag }
                </div>
              );
            }
            return null;
          })
        }
      </Link>
      <button
        type="button"
        onClick={ copyToClipboard }
      >
        <AiOutlineShareAlt />
      </button>

      {
        linkCopied && (
          <p>Link copied!</p>
        )
      }
    </div>
  );
};

DoneRecipeCard.propTypes = {
  index: PropTypes.number,
  recipe: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    nationality: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    doneDate: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
}.isRequired;

export default DoneRecipeCard;
