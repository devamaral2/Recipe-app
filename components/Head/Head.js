import React from 'react';
import NextHead from 'next/head';
import './Head.module.css';

export default function Head({ title, icon }) {
  return (
    <NextHead>
      <title> {title}</title>
      <link className="link" rel="icon" href={ icon } />
    </NextHead>
  )
}