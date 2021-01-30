import React from 'react';
import reactlogo from '../layout/react-logo.png';
import mern from '../layout/mern.jpg';

import styled from 'styled-components';
const PortfolioItem = ({ repo }) => {
  const Link = styled.a`
    font-family: 'Poppins', sans-serif;
    outline: none;
    font-style: italic;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3);
    font-size: 20px;
    border: none;
    text-decoration: none;
    padding: 7px 15px;
    border-radius: 5px;
    color: #fff;
    background-color: #2b2b2b;
    transition: ease-in-out 0.5s;
  `;
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={repo.img === 'mern' ? mern : reactlogo} alt='mern' />
      </div>
      <div className='card-title'>
        <span>{repo.title}</span>
      </div>
      <div className='card-desc'>
        <p>{repo.desc}</p>
      </div>
      <div className='card-links'>
        <Link href={repo.link} target='_blank' rel='noreferrer'>
          Repository
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;
