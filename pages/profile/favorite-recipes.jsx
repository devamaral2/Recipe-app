import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { getFavoriteRecipes } from '../../helpers/localStorage';
import Header from '../../components/Header/Header';
import RecipeFilters from '../../components/RecipeFilters/RecipeFilters';
import FavoriteRecipeCard from '../../components/FavoriteRecipeCard/FavoriteRecipeCard';
import Colors from '../../styled/colorsStyle/Colors';

function FavoriteRecipes() {
  const { recipeFilter, favoriteRecipes: favorite } = useContext(AppContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const favoriteRecipes = getFavoriteRecipes();
    const filteredRecipes = favoriteRecipes.filter((recipe) => {
      if (recipeFilter === 'food' && recipe.type === 'food') return recipe;
      if (recipeFilter === 'drink' && recipe.type === 'drink') return recipe;
      if (recipeFilter === 'all') return recipe;
      return null;
    });
    setRecipes(filteredRecipes);
  }, [recipeFilter, favorite]);

  return (
    <Colors>
      <div className="body">
        <Header
          pathname="profile"
          namePage="Favorite Recipes"
          viewIcon="false"
        />
        <section>
          <RecipeFilters />
        </section>
        <main>
          {
            recipes.map((recipe, index) => (
              <FavoriteRecipeCard
                key={index}
                index={index}
                recipe={recipe}
              />
            ))
          }
        </main>
      </div>
      <style jsx>{`
        * {
          padding-bottom: 60px;
          margin: 0;
        }
        .body {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100vw;
          align-items: center;
        }
        section {
          width: 100vw;
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          align-items: center;
        }
        main {
          flex-direction: column;
          align-items: center;
          width: 100%;
          display: flex;
        }
      `}</style>
    </Colors>
  );
}
export default FavoriteRecipes;