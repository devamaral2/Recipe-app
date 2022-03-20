import React, { useContext } from 'react';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import AppContext from '../../../../context/AppContext';
import IngredientCard from '../../../../components/IngredientCard/IngredientCard';
import * as g from '../../../../helpers/consts';
import Colors from '../../../../styled/colorsStyle/Colors';
import { fetchIngredients } from '../../../../helpers/services/api';

function ExploreFoodIngredients({ ingredients}) {
  return (
    <Colors>
      <div className="body">
        <Header
          namePage="Explore Ingredients"
          viewIcon="false"
          pathname="explore"
        />
        <section>       
          {
            ingredients.map((ingredient, index) => {
              if (index <= g.MAX_NUMBER_OF_RESULTS) {
                return (
                  <IngredientCard
                    key={index}
                    name={ingredient.strIngredient}
                    filter={g.FILTER_FOODS}
                    index={index}
                  />
                );
              }
              return null;
            })
          }
      </section>
        <Footer pathname="explore" />
      </div>
      <style jsx>{`
        section { 
          display: flex;
          flex-direction: column; 
          align-items: center;
        }
      `}</style>
    </Colors>
  );
}

export async function getStaticProps() {
  const foodsIngredientsData = await fetchIngredients(g.FILTER_FOODS);
  return {
    props: {
      ingredients: foodsIngredientsData.meals,
    }
  }
}

export default ExploreFoodIngredients;
