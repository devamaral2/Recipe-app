import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const RecipeFilters = () => {
  const { setRecipeFilter } = useContext(AppContext);

  return (
    <div>
      <form>
        <button
          className="done-recipes-btn"
          type="button"
          onClick={ () => setRecipeFilter('all') }
        >
          All
        </button>

        <button
          className="done-recipes-btn"
          type="button"
          onClick={ () => setRecipeFilter('food') }
        >
          Food
        </button>

        <button
          className="done-recipes-btn"
          type="button"
          onClick={ () => setRecipeFilter('drink') }
        >
          Drinks
        </button>
      </form>
      <style jsx>{`
        button {
          border: none;
          font-size: 90%;
          border-radius: 10rem;
          width: 6rem;
          margin: 5px;
          box-shadow: 
          rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, 
          rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, 
          rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
          font-family: Arial, Helvetica, sans-serif;
          padding: 0.5rem;
        }
        form {
          display: flex;
          justify-content: center;
        }
      `}
      </style>
    </div>
  );
};

export default RecipeFilters;
