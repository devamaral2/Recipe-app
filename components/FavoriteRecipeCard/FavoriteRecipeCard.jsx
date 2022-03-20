import React, { useContext, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import AppContext from '../../context/AppContext';
import { removeFavoriteRecipe } from '../../helpers/localStorage';
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

const FavoriteRecipeCard = ({ index, recipe }) => {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(AppContext);
  const [linkCopied, setLinkCopied] = useState(false);

  const { id, type, name, nationality, image } = recipe;
  const category = recipe.type === 'food' ? recipe.category : recipe.alcoholicOrNot;

  const copyToClipboard = () => {
    copy(`http://localhost:3000/${type}/${id}`);
    setLinkCopied(true);
  };

  const removeFavorite = () => {
    setFavoriteRecipes([...favoriteRecipes, id]);
    removeFavoriteRecipe(recipe);
  };

  return (
    <div className='body'>

      <Link key={index} href={`/${recipe.type}/${recipe.id}`}>
        <a>
          <img
            alt={name}
            src={image}
            style={{ width: '50px' }}
          />
        </a>
      </Link>
      <div> </div>
          <p>
            {`${nationality} - ${category}`}
          </p>

          <h2>
            {name}
          </h2>

      <button
        type="button"
        onClick={copyToClipboard}
      >
        <AiOutlineShareAlt />
      </button>

      {
        linkCopied && (
          <p>Link copied!</p>
        )
      }

      <button
        type="button"
        onClick={removeFavorite}
        >
        <AiFillHeart />
      </button>
      <style jsx>{`
      * {
        text-decoration:none; 
        font-family: Arial, Helvetica, sans-serif;
      }
       .link {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 40px;
        position:relative;
        width: 70%;
        min-height: 16rem;
      }
      .card-img {
        border-radius: 50%;
        z-index: 1;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        width: 15px;
      }
      .card-name {
        text-align: center;
        text-decoration:none; 
        z-index: 1;
        margin-top: 30px;
        font-size: 1.6rem;
      }

      .card {
        float: left;
        width: 100%;
        min-height: 88%;
        z-index: 0;
        position:absolute;
        bottom: 0;
        border-radius: 1.5rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      } 
    `}</style>

      </div>
  );
};

FavoriteRecipeCard.propTypes = {
  index: PropTypes.number,
  recipe: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    nationality: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
}.isRequired;

export default FavoriteRecipeCard;
