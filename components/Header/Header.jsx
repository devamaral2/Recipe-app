import React, { useContext } from 'react';
import { CgProfile } from 'react-icons/cg';
import { BiSearchAlt } from 'react-icons/bi';
import AppContext from '../../context/AppContext';
import Container from './Styled';

export default function Header({ namePage, viewIcon, pathname }) {
  const { setViewSearchBar } = useContext(AppContext);

  return (
    <Container className="body">
      <a href="/profile">
        <CgProfile className={`icons ${pathname.includes('profile') ? 'orange' : 'default-links' }`} />
      </a>
      <span>{namePage}</span>
      {
        viewIcon === 'true' ? (
          <button
            type="button"
            onClick={() => setViewSearchBar((Prev) => !Prev)}
          >
            <BiSearchAlt className='search-icon' />
          </button>
        ) : (<div className='hidden-div'/>)
      }
    </Container>
  );
}
