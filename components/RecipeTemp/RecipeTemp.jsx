import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';
import { INGREDIENTS_QUANTITY } from '../../helpers/consts/index';
import { useRouter } from 'next/router';
// import RecipeDetailsHeader from
// '../RecipeDetailsHeader/RecipeDetailsHeader';

function RecipeTemp({ recipe, handleCheckbox, doneSteps }) {
  const [ingredients, setIngredients] = useState([]);
  // const [
  //   disableBtn,
  //   setDisableBtn] = useState(true);
  const router = useRouter();
  const {
    strInstructions,
  } = recipe;

  useEffect(() => {
    if (Object.keys(recipe).length > 0) {
      INGREDIENTS_QUANTITY.forEach((number) => {
        const text = `${recipe[`strMeasure${number}`] || ''}
          ${recipe[`strIngredient${number}`] || ''}`.trim();
        if (text !== '') {
          setIngredients((prev) => [...prev, { number, text }]);
        }
      });
    }
  }, [recipe]);

  // useEffect(() => {
  //   setDisableBtn(doneSteps.length !== ingredients.length);
  // }, [doneSteps.length, ingredients.length, setDisableBtn]);

  const handleClick = (event) => {
    event.preventDefault();
    router.push('/profile/done-recipes');
  };

  return (
    <div className='body'>
      <ul>
        {ingredients.map(({ number, text }, index) => (
          <li className="ingredients" key={ index } >
            <label htmlFor={ number }>
              <input
                className="ingredients-checkbox"
                id={ number }
                type="checkbox"
                onChange={ handleCheckbox }
                checked={ doneSteps.includes(number.toString()) }
              />
              {text}
            </label>
          </li>
        ))}
      </ul>
      <p>{strInstructions}</p>
      <button
        type="button"
        // disabled={ disableBtn }
        onClick={ handleClick }
        className="finish"
      >
        Finish Recipe
      </button>
      <style jsx>{`
        button {
          border: none
        }
      `}</style>
    </div>
  );
}

RecipeTemp.propTypes = {
  recipe: PropType.shape({
    strMeal: PropType.string,
    strDrink: PropType.string,
    strAlcoholic: PropType.string,
    strCategory: PropType.string,
    strInstructions: PropType.string,
    strMealThumb: PropType.string,
    strDrinkThumb: PropType.string,
  }).isRequired,
  handleCheckbox: PropType.func.isRequired,
  doneSteps: PropType.arrayOf(PropType.string),
  // setDisableBtn: PropType.func.isRequired,
};

RecipeTemp.defaultProps = {
  doneSteps: [],
};
export default RecipeTemp;
