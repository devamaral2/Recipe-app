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
  const { idMeal, strMeal, strMealThumb, strCategory } = recipe;
  const { idDrink, strDrink, strDrinkThumb, strAlcoholic } = recipe;
  const id = type === 'food' ? idMeal : idDrink;
  const title = type === 'food' ? strMeal : strDrink;
  const image = type === 'food' ? strMealThumb : strDrinkThumb;
  const category = type === 'food' ? strCategory : strAlcoholic;

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
        {
          linkCopied && (
            <div className="link-copied">
              <p>Link copied!</p>
            </div>
          )
        }

      <div className="options body">
        <button
          onClick={ copyToClipboard }
        >
          <AiOutlineShareAlt className='share-icon'/>
        </button>
        <button
          onClick={ () => saveFavorite(type, favorite, setFavorite, recipe) }
        >
          { !favorite ? (<AiOutlineHeart className='heart'/>) 
          : (<AiFillHeart className='selected-heart'/>)}
        </button>
      </div>
      <h2>
        { title }
      </h2>
      <h3>
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
