import React from 'react';
import Container from './styled';
import { GiMeal } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';
import { MdOutlineExplore, MdExplore } from 'react-icons/md';

function Footer({ pathname }) {
  return (
    <Container data-testid="footer">
      <a
        className={ pathname.includes('foods')  ? 'orange' : '' }
        href="/foods/All"
      >
        <GiMeal />
      </a>
      <a
        href="/explore"
      >
        <MdOutlineExplore />
      </a>
      <a
        href="/drinks/All"
      >
        <BiDrink />
      </a>
    </Container>
  );
}

export default Footer;
