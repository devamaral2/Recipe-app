import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import AppContext from '../../helpers/context/AppContext';
import Container from './Styled';
import Link from 'next/link';

export default function Header({ namePage, viewIcon }) {
  const { setViewSearchBar } = useContext(AppContext);

  return (
    <Container>
      <Link href="/profile">
        <img data-testid="profile-top-btn" src={ ProfileIcon } alt="profile icon" />
      </Link>
      <span data-testid="page-title">{namePage}</span>
      {
        viewIcon === 'true' ? (
          <button
            type="button"
            onClick={ () => setViewSearchBar((Prev) => !Prev) }
          >
            <img data-testid="search-top-btn" src={ SearchIcon } alt="search icon" />
          </button>
        ) : (<div />)
      }
    </Container>
  );
}

Header.propTypes = {
  namePage: PropTypes.string.isRequired,
  viewIcon: PropTypes.string.isRequired,
};
