import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const RecipeFilters = () => {
  const { setRecipeFilter } = useContext(AppContext);

  return (
    <div>
      <form>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setRecipeFilter('all') }
        >
          All
        </button>

        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setRecipeFilter('food') }
        >
          Food
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setRecipeFilter('drink') }
        >
          Drinks
        </button>
      </form>
    </div>
  );
};

export default RecipeFilters;
