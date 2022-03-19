import React, { useEffect, useState, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { fetchData, fetchItensByCategory } from '../../helpers/services/api';
import { recipeInProgress, getInProgressRecipes } from '../../helpers/localStorage';
import RecipeDetailsHeader from
  '../../components/RecipeDetailsHeader/RecipeDetailsHeader';
import RecipeIngredients from '../../components/RecipeIngredients/RecipeIngredients';
import RecommendedRecipes from '../../components/RecommendedRecipes/RecommendedRecipes';
import FoodLayout from '../../styled/styledFood/FoodLayout';
import Colors from '../../styled/colorsStyle/Colors'
import AppContext from '../../context/AppContext';
import PageSkeleton from '../../components/PageSkeleton/PageSkeleton';
import { useRouter } from 'next/router';

function Food({ meal }) {
  const { theme } = useContext(AppContext);
  const [buttonText, setButtonText] = useState();
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchRecommendedRecipes = async () => {
      const data = await fetchData('drinks', 'name', '');
      const res = Object.values(data)[0]
      setRecommendedRecipes(res);
    };

    if (Object.keys(getInProgressRecipes().meals).includes(id)) {
      setButtonText('Continue Recipe');
    } else setButtonText('Start');

    fetchRecommendedRecipes();
  }, [id, setButtonText]);

  const setProgress = () => {
    recipeInProgress('food', meal);
    setButtonText('Continue Recipe');
    setRedirect(true);
  };

  if(router.isFallback) {
    return (
      <PageSkeleton />
    )
  }

  if (Object.values(meal).length > 0) {
    return (
      <Colors theme={theme}>
        <FoodLayout className='body'>
          <main className='body'>

            {
              redirect && <Redirect to={`/food/${id}/in-progress`} />
            }
            <RecipeDetailsHeader
              recipe={meal}
              url={`http://localhost:3000/food/${id}`}
              type="food"
            />

            <RecipeIngredients object={meal} />

            <div className="instructions">
              <p>{meal.strInstructions}</p>
            </div>

            <div className="video">
              <iframe
                src={meal.strYoutube.replace('watch?v=', /embed/)}
                title="recipe video"
              >
                <p>Seu navegador não possui suporte a este recurso</p>
              </iframe>
            </div>

            <RecommendedRecipes type="food" recipes={recommendedRecipes} />

            <button
              data-testid="start-recipe-btn"
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
  const data = await fetchData('foods', 'getRecipe', params.id);
  return {
    props: {
      meal: data.meals[0],
    }
  }
}
export async function getStaticPaths() {
  const cat = ['Beef', 'Chicken', 'Goat', 'Breakfast', 'Dessert']
  const chicken = await fetchItensByCategory('foods', 'Chicken');
  const slicedChicked = chicken.meals.slice(0, 12);
  const allChickens = slicedChicked.map((chicken) => chicken.idMeal);
  const beef = await fetchItensByCategory('foods', 'Beef');
  const slicedBeef = beef.meals.slice(0, 12);
  const allBeefs = slicedBeef.map((chicken) => chicken.idMeal);
  const goat = await fetchItensByCategory('foods', 'Goat');
  const slicedGoat = goat.meals.slice(0, 12);
  const allGoats = slicedGoat.map((chicken) => chicken.idMeal);
  const breakfast = await fetchItensByCategory('foods', 'Breakfast');
  const slicedBreakfast = breakfast.meals.slice(0, 12);
  const allBreakfasts = slicedBreakfast.map((chicken) => chicken.idMeal);
  const dessert = await fetchItensByCategory('foods', 'Dessert');
  const slicedDesserts = dessert.meals.slice(0, 12);
  const allDesserts = slicedDesserts.map((chicken) => chicken.idMeal);
  const allCatagories = await await fetchData('foods', 'name', '');
  const slicedAllCategories = allCatagories.meals.slice(0, 12);
  const allCategoriesResult = slicedAllCategories.map((chicken) => chicken.idMeal);
  const allPaths = [...allBeefs,
  ...allBreakfasts,
  ...allCategoriesResult,
  ...allChickens,
  ...allDesserts,
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
//   const categories = await fetchCategory('foods');
//     const sliced = categories.meals.slice(0,5)
//     const allPaths = sliced.map((category) => {
//         return {
//           params: {id: category.strCategory}
//         }
//     })





export default Food;
