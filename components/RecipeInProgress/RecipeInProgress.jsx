import React, { useState, useEffect, useContext } from 'react';
import fetchFoodOrDrink from '../../helpers/services/api';
import Container from './styled';
import RecipeTemp from '../RecipeTemp/RecipeTemp'
import RecipeDetailsHeader from '../RecipeDetailsHeader/RecipeDetailsHeader';
import { useRouter } from 'next/router';
import AppContext from '../../context/AppContext';
import Colors from '../../styled/colorsStyle/Colors'

function RecipeInProgress() {
  const { theme } = useContext(AppContext);
  const router = useRouter();
  const id = router.query.id;
  const pathname = router.pathname;
  const [recipe, setRecipe] = useState({});
  const [doneSteps, setDoneSteps] = useState([]);
  const [url, setUrl] = useState('')
  const { idMeal, idDrink } = recipe;
  const isFood = pathname.includes('food');
  const key = isFood ? 'meals' : 'cocktails';
  const type = isFood ? 'food' : 'drink';

  const {
    strMeal,
    strDrink,
    strAlcoholic,
    strCategory,
    strMealThumb,
    strDrinkThumb,
  } = recipe;

  useEffect(() => {
    setUrl(window.location.href.replace('/in-progress', ''))
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify({ cocktails: {}, meals: {} }),
      );
    } else {
      const savedProgress = JSON.parse(
        localStorage.getItem('inProgressRecipes'),
      );
      setDoneSteps(savedProgress[key][id] || []);
    }
  }, [id, key]);

  useEffect(() => {
    const getRecipe = async () => {
      const recipeDetails = await fetchFoodOrDrink(pathname, id);
      console.log(recipeDetails)
      setRecipe(recipeDetails[0]);
    };
    getRecipe();
  }, [id, pathname])

  useEffect(() => {
    if (Object.keys(recipe).length > 0) {
      const progress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      progress[key] = {
        ...progress[key],
        [idMeal || idDrink]: doneSteps,
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(progress));
    }
  }, [doneSteps, idDrink, idMeal, key, recipe]);

  const handleCheck = ({ target }) => {
    if (target.checked) {
      setDoneSteps((prev) => [...prev, target.id]);
    } else {
      setDoneSteps((prev) => prev.filter((step) => step !== target.id));
    }
  };

  return (
    <Colors theme={theme}>
      <div className="body">
        <Container>
          <RecipeDetailsHeader
            type={type}
            url={url}
            recipe={recipe}
          />
          <RecipeTemp
            recipe={recipe}
            handleCheckbox={handleCheck}
            doneSteps={doneSteps}
          />
        </Container>
      </div>
    </Colors>
  );
}

export default RecipeInProgress;
