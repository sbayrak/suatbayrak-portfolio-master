import React from 'react';
import styled from 'styled-components';

const Inter1 = () => {
  const Link = styled.a`
    color: rgb(190, 190, 190);
    transition: ease-in-out 0.5s;
    font-size: 50px;
  `;

  return (
    <div className='inter1'>
      <div className='inter1-wrapper'>
        <span>Go into my GitHub Repository</span>
        <Link
          href='https://www.github.com/sbayrak'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github'></i>
        </Link>
      </div>
    </div>
  );
};

export default Inter1;
