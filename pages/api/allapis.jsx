import { fetchData, fetchCategory } from '../../helpers/services/api';

export default async function handler (req, res) {
  const foodsAll = await fetchData('foods', 'name', '');
  // const categories = await fetchCategory('foods');
  
  res.status(200).json({ 
    all: foodsAll.meals,
    // categories: categories.meals
  })
}
