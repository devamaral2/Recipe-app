import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { fetchData, fetchItensByCategory } from '../../../helpers/services/api';
import { recipeInProgress, getInProgressRecipes } from '../../../helpers/localStorage';
import RecipeDetailsHeader from
  '../../../components/RecipeDetailsHeader/RecipeDetailsHeader';
import RecipeIngredients from '../../../components/RecipeIngredients/RecipeIngredients';
import RecommendedRecipes from '../../../components/RecommendedRecipes/RecommendedRecipes';
import FoodLayout from '../../../styled/styledFood/FoodLayout';
import Colors from '../../../styled/colorsStyle/Colors'
import AppContext from '../../../context/AppContext';
import PageSkeleton from '../../../components/PageSkeleton/PageSkeleton';
import { useRouter } from 'next/router';

function Drink({ drink }) {
  const { theme, setRecipe } = useContext(AppContext);
  const [buttonText, setButtonText] = useState();
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    setRecipe(drink);
  },[])
  
  useEffect(() => {
    const fetchRecommendedRecipes = async () => {
      const data = await fetchData('drinks', 'name', '');
      const res = Object.values(data)[0]
      setRecommendedRecipes(res);
    };

    if (Object.keys(getInProgressRecipes().cocktails).includes(id)) {
      setButtonText('Continue Recipe');
    } else setButtonText('Start');

    fetchRecommendedRecipes();
  }, [id, setButtonText]);

  const setProgress = () => {
    recipeInProgress('drink', drink);
    setButtonText('Continue Recipe');
    // setRedirect(true);
    router.push(`/drink/${id}/in-progress`)
  };

  if(router.isFallback) {
    return (
      <PageSkeleton />
    )
  }

  if (Object.values(drink).length > 0) {
    return (
      <Colors theme={theme}>
        <FoodLayout>
          <main className='body'>

            {
              redirect && <Redirect to={`/drink/${id}/in-progress`} />
            }
            <RecipeDetailsHeader
              recipe={drink}
              url={`https://recipe-app-next-js-kappa.vercel.app/drink/${id}`}
              type="drink"
            />

            <RecipeIngredients object={drink} />

            <div className="instructions">
              <p>{drink.strInstructions}</p>
            </div>

            <RecommendedRecipes type="foods" recipes={recommendedRecipes} />

            <button
              className="start-recipe"
              type="button"
              onClick={setProgress}
            >
              {buttonText}
            </button>
          </main>
        </FoodLayout>
      </Colors>

    );
  }
  return (<PageSkeleton />);
}

export async function getStaticProps({ params }) {
  const data = await fetchData('drinks', 'getRecipe', params.id);
  return {
    props: {
      drink: data.drinks[0],
    }
  }
}
export async function getStaticPaths() {
  const cat = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other/Unknown', 'Cocoa']
  const ordinaryDrink = await fetchItensByCategory('drinks', 'Ordinary Drink');
  const slicedOrdinaryDrink = ordinaryDrink.drinks.slice(0, 12);
  const allOrdinaryDrinks = slicedOrdinaryDrink.map((drink) => drink.idDrink);
  const cocktail = await fetchItensByCategory('drinks', 'Cocktail');
  const slicedCocktail = cocktail.drinks.slice(0, 12);
  const allCocktails = slicedCocktail.map((drink) => drink.idDrink);
  const Shake = await fetchItensByCategory('drinks', 'Shake');
  const slicedShake = Shake.drinks.slice(0, 12);
  const allShakes = slicedShake.map((drink) => drink.idDrink);
  const other = await fetchItensByCategory('drinks', 'Other/Unknown');
  const slicedOther = other.drinks.slice(0, 12);
  const allOthers = slicedOther.map((drink) => drink.idDrink);
  const cocoa = await fetchItensByCategory('drinks', 'Cocoa');
  const slicedCocoa = cocoa.drinks.slice(0, 12);
  const allCocoas = slicedCocoa.map((drink) => drink.idDrink);
  const allCatagories = await await fetchData('drinks', 'name', '');
  const slicedAllCategories = allCatagories.drinks.slice(0, 12);
  const allCategoriesResult = slicedAllCategories.map((drink) => drink.idDrink);
  const allPaths = [
    ...allCocktails,
    ...allOthers,
    ...allShakes,
    ...allOrdinaryDrinks,
    ...allCocoas,
    ...allCategoriesResult
  ]
  const results = allPaths.map((idNumber) => {
    return {
      params: { id: idNumber }
    }
  })

  return {
    paths: results,
    fallback: true,
  }
}

// export async function getStaticPaths() {
//   const categories = await fetchCategory('drinks');
//     const sliced = categories.meals.slice(0,5)
//     const allPaths = sliced.map((category) => {
//         return {
//           params: {id: category.strCategory}
//         }
//     })





export default Drink;
