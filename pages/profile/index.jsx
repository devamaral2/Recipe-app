import { useRouter } from 'next/router';
import React, { useState, useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AppContext from '../../context/AppContext';
import Colors from '../../styled/colorsStyle/Colors'

export default function Profile() {
  const { theme } = useContext(AppContext)
  const router = useRouter();
  const [emailUser, setEmailuser] = useState()

  return (
    <Colors theme={theme}>
      <>
        <div className='body'>
          <Header
            namePage="Profile"
            viewIcon="false"
            pathname={router.pathname}
          />

          <span>{emailUser}</span>
          <a
            href="/profile/done-recipes"
          >
            <button
              className='large-buttons'
              type="button"
            >
              Done Recipes
            </button>
          </a>
          <a href="/profile/favorite-recipes">
            <button
              className='large-buttons'
            >

              Favorite Recipes
            </button>
          </a>
          <a href="/">
            <button
              className='large-buttons'
              onClick={() => localStorage.clear()}
            >
              Logout
            </button>
          </a>

        </div>
        <Footer pathname={router.pathname} />
        <style jsx>{`
        div {
          align-items: center;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        
        span {
        font-size: 18px;
        font-weight: 600;
        margin-top: 3rem;
        margin-bottom: 5rem;
      }
      button {
        border-radius: 10px;
        border: none;
        color: white;
        font-size: 18px;
        height: 4rem;
        width: 15rem;
        margin: 1rem;
      }
      `}</style>
      </>
    </Colors>
  );
}
