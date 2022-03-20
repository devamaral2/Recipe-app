import React, { useContext } from 'react';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import AppContext from '../../../../context/AppContext';
import IngredientCard from '../../../../components/IngredientCard/IngredientCard';
import * as g from '../../../../helpers/consts';
import Colors from '../../../../styled/colorsStyle/Colors';

function ExploreFoodIngredients() {
  const { foodsIngredients } = useContext(AppContext);
  return (
    <Colors>
      <div className="body">
        <Header
          namePage="Explore Ingredients"
          viewIcon="false"
          pathname="explore"
        />
        <Container>

          {
            foodsIngredients.length > 0 && foodsIngredients.map((ingredient, index) => {
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
        </Container>
        <Footer pathname="explore" />
      </div>
    </Colors>
  );
}

export default ExploreFoodIngredients;
