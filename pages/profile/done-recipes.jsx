import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { getDoneRecipes } from '../../helpers/localStorage';
import Header from '../../components/Header/Header';
import RecipeFilters from '../../components/RecipeFilters/RecipeFilters';
import DoneRecipeCard from '../../components/DoneRecipeCard/DoneRecipeCard';
import Colors from '../../styled/colorsStyle/Colors';

function DoneRecipes() {
  const { recipeFilter, theme, setTheme } = useContext(AppContext);
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    const data = localStorage.getItem('theme') 
    data && setTheme(JSON.parse(data))
  }, [])

  useEffect(() => {
    const doneRecipes = getDoneRecipes();
    const filteredRecipes = doneRecipes.filter((recipe) => {
      if (recipeFilter === 'food' && recipe.type === 'food') return recipe;
      if (recipeFilter === 'drink' && recipe.type === 'drink') return recipe;
      if (recipeFilter === 'all') return recipe;
      return null;
    });
    setRecipes(filteredRecipes);
  }, [recipeFilter]);

  return (
    <Colors theme={theme}>
    <div className='body'>
      <Header
        pathname="profile"
        namePage="Done Recipes"
        viewIcon="false"
      />
      <RecipeFilters />
      {
        recipes.length >= 1 && (
          recipes.map((recipe, index) => (
            <DoneRecipeCard
              key={index}
              recipe={recipe}
              index={index}
            />
          ))
        )
      }
      <style jsx>{`
        div {
          min-height: 100vh;
          width: 100vw;
        }
        `}</style>
    </div>
    </Colors>
  );
}

export default DoneRecipes;
