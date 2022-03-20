import React, { useContext } from 'react';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import IngredientCard from '../../../../components/IngredientCard/IngredientCard';
import * as g from '../../../../helpers/consts';
import Colors from '../../../../styled/colorsStyle/Colors';
import { fetchIngredients } from '../../../../helpers/services/api';
import AppContext from '../../../../context/AppContext';

function ExploreFoodIngredients({ ingredients}) {
  const { theme } = useContext(AppContext);
  return (
    <Colors theme={ theme }>
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
        div {
          padding-bottom: 60px;
        }
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
