import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { getFavoriteRecipes } from '../../helpers/localStorage';
import saveFavorite from '../../helpers/saveFavoriteRecipe';
import Container from './Styled';
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

const RecipeDetailsHeader = ({ type, url, recipe }) => {
  const [linkCopied, setLinkCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);
  let id;
  let title;
  let image;
  let category;

  if (type === 'food') {
    const { idMeal, strMeal, strMealThumb, strCategory } = recipe;
    id = idMeal;
    title = strMeal;
    image = strMealThumb;
    category = strCategory;
  } else {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic } = recipe;
    id = idDrink;
    title = strDrink;
    image = strDrinkThumb;
    category = strAlcoholic;
  }

  useEffect(() => {
    const favorites = getFavoriteRecipes();
    if (favorites.length > 0) {
      const isFavorite = favorites.some((value) => value.id === id);
      setFavorite(isFavorite);
    } else setFavorite(false);
  }, [id]);

  const copyToClipboard = () => {
    copy(url);
    setLinkCopied(true);
  };

  return (
    <Container className="recipe-header">
      <img
        alt={ title }
        src={ image }
        data-testid="recipe-photo"
      />

      <div className="options">
        <button
          data-testid="share-btn"
          type="button"
          onClick={ copyToClipboard }
        >
          <AiOutlineShareAlt className='share-icon'/>
        </button>

        {
          linkCopied && (
            <div className="link-copied">
              <p>Link copied!</p>
            </div>
          )
        }

        <button
          type="button"
          onClick={ () => saveFavorite(type, favorite, setFavorite, recipe) }
        >
          { !favorite ? (<AiOutlineHeart className='heart'/>) 
          : (<AiFillHeart className='selected-heart'/>)}
        </button>
      </div>

      <h2 data-testid="recipe-title">
        { title }
      </h2>
      <h3 data-testid="recipe-category">
        { category }
      </h3>
      <style jsx>{`
        @keyframes fade-in {

          from {
            opacity: 1;
            top: -100;
          }
        
          to {
            opacity: 1;
            top: 0;
          }
        }
        
        .link-copied {
          animation: fade-in 2s;
          opacity: 0;
        }
        
      `}</style>
    </Container>
  );
};

RecipeDetailsHeader.propTypes = {
  type: PropTypes.string,
  recipe: PropTypes.objectOf(PropTypes.string),
  url: PropTypes.string,
}.isRequired;

export default RecipeDetailsHeader;
