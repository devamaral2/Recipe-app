import React, { useState, useEffect } from 'react';
import { MIN_PASSWD_LENGTH, emailRegex } from '../helpers/consts';
import ContainerIndex from '../styled/styledIndex/styledIndex';
import Image from 'next/image';
import { useRouter } from 'next/router'
import Head from '../components/Head/Head';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPasswd] = useState('');
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (emailRegex.test(email) && password.length > MIN_PASSWD_LENGTH) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    router.push('/foods/All');
  };

  return (
    <ContainerIndex>
      <Head 
        title={ 'Login Page' }
        icon={'../public/new-recipe-icon.png'}
      />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            data-testid="email-input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your e-mail"
            autoComplete="off"
          />
        </label>
        <label id="pass-label" htmlFor="password">
          <input
            id="password"
            type="password"
            data-testid="password-input"
            onChange={(e) => setPasswd(e.target.value)}
            value={password}
            placeholder="Type your password"
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={disabled}
        >
          Entrar
        </button>
      </form>
        <Image 
          className="background-image" 
          src={require("../public/image6.jpg")} 
          alt="img" 
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        
        `}</style>
    </ContainerIndex>
  );
}