import React, { useContext, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import AppContext from '../../context/AppContext';
import { removeFavoriteRecipe } from '../../helpers/localStorage';
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import Container from './styled';

const FavoriteRecipeCard = ({ index, recipe }) => {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(AppContext);
  const [linkCopied, setLinkCopied] = useState(false);

  const { id, type, name, nationality, image } = recipe;
  const category = recipe.type === 'food' ? recipe.category : recipe.alcoholicOrNot;

  const copyToClipboard = () => {
    copy(`https://recipe-app-next-js-kappa.vercel.app/${type}/${id}`);
    setLinkCopied(true);
  };

  const removeFavorite = () => {
    setFavoriteRecipes([...favoriteRecipes, id]);
    removeFavoriteRecipe(recipe);
  };

  return (
    <Container>
      <div className='body'>
        <Link key={index} href={`/${recipe.type}/${recipe.id}`}>
          <a>
            <img
              alt={name}
              src={image}
            />
          </a>
        </Link>
        <div className="favorite-content">

          <h3>
            {name}
          </h3>
          <p>
            {`${nationality} - ${category}`}
          </p>


          <button
            type="button"
            onClick={copyToClipboard}
          >
            <AiOutlineShareAlt className="icons share-icon" />
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
            onClick={removeFavorite}
          >
            <AiFillHeart className="icons orange" />
          </button>
        </div>
      </div>
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
