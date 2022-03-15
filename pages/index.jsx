import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { MIN_PASSWD_LENGTH, emailRegex } from '../helpers/consts';
import ContainerIndex from '../styled/styledIndex/styledIndex';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPasswd] = useState('');
  const [disabled, setDisabled] = useState(true);

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
  };

  return (
    <ContainerIndex>
      {/* <Head>
        <title>Recipes app</title>
      </Head> */}
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
        {/* <Image src="../public/images/images/image6.jpg" alt="img" fill /> */}
      </form>
        <Image 
          className="background-image" 
          src={require("../public/images/images/image6.jpg")} 
          alt="img" 
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
    </ContainerIndex>
  );
}