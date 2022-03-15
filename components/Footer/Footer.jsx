import React from 'react';
import Container from './styled';
import drinkIcon from '../../images/drinkIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import Link from 'next/link';

function Footer() {
  return (
    <Container data-testid="footer">
      <Link
        data-testid="drinks-bottom-btn"
        href="/drinks"
        src={ drinkIcon }
      >
        <object
          type="image/svg+xml"
          data={ drinkIcon }
        >
          Drinks
        </object>
      </Link>
      <Link
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        href="/explore"
      >
        <object type="image/svg+xml" data={ exploreIcon }>Drinks</object>
      </Link>
      <Link
        data-testid="food-bottom-btn"
        src={ mealIcon }
        href="/foods"
      >
        <object data={ mealIcon }>Foods</object>
      </Link>
    </Container>
  );
}

export default Footer;
