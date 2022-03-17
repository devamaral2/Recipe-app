import { fetchData, fetchCategory, fetchItensByCategory  } from '../../helpers/services/api';

export default async function handler (req, res) {
  const foodsAll = await fetchData('foods', 'name', '');
  // const categories = await fetchCategory('foods');
  const kumpir = await fetchData('foods', 'getRecipe', 52978)
  const chicken = await fetchItensByCategory('foods', 'Chicken')
  const goat = await fetchItensByCategory('foods', 'Chicken');
  const slicedGoat= goat.meals.slice(0,12);
  
  res.status(200).json({ 
    all: foodsAll.meals,
    kumpir,
    chicken,
    goat,
  })
}
