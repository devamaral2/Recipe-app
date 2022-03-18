import React, { useContext } from 'react';
import { CgProfile } from 'react-icons/cg';
import { BiSearchAlt } from 'react-icons/bi';
import AppContext from '../../context/AppContext';
import Container from './Styled';

export default function Header({ namePage, viewIcon }) {
  const { setViewSearchBar } = useContext(AppContext);

  return (
    <Container>
      <a href="/profile">
        <CgProfile className='icons jus'/>
      </a>
      <span data-testid="page-title">{namePage}</span>
      {
        viewIcon === 'true' ? (
          <button
            type="button"
            onClick={() => setViewSearchBar((Prev) => !Prev)}
          >
            <BiSearchAlt className='icons'/>
          </button>
        ) : (<div />)
      }
    </Container>
  );
}
