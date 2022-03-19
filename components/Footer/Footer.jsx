import React from 'react';
import Container from './styled';
import { GiMeal } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { MdOutlineExplore, MdExplore } from 'react-icons/md';

function Footer({ pathname }) {
  const router = useRouter();
  return (
    <Container className="footer">
      <a
        href="/foods/All"
        className={pathname.includes('foods') ? 'orange' : 'default-links'}
      >
        <GiMeal />
      </a>

      <a
      className={pathname.includes('explore') ? 'orange' : 'default-links'}
        href="/explore"
      >
        <MdOutlineExplore />
      </a>
      <a
        className={pathname.includes('drinks') ? 'orange' : 'default-links'}
        href="/drinks/All"
      >
        <BiDrink />
      </a>
    </Container>
  );
}

export default Footer;
