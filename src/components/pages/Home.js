/* eslint-disable no-unused-vars */
import React from 'react';
import Typical from 'react-typical';
import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const Home = () => {
  const welcomer = {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
  };
  const welcomerWrapper = {
    width: '60%',
    margin: '0 auto',
    position: 'relative',
    top: '35%',
    textAlign: 'left',
    borderRight: '1px solid rgba(207,207,207,0.5)',
  };

  const button = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '54px',
    borderRadius: '5px',
    outline: 'none',
    transition: 'ease-in-out 0.5s',
    border: '1px solid white',
    cursor: 'pointer',
  };

  const Button = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 54px;
    border-radius: 5px;
    outline: none;
    transition: ease-in-out 0.5s;
    border: 1px solid white;
    cursor: pointer;
    &:hover {
      background-color: #191919;
      color: #fff;
    }
  `;

  return (
    <div className='welcomer' id='welcomer'>
      <div className='welcomer-wrapper'>
        <div className='top'>
          <p>Welcome!</p>
          <span>Hi, I'm Suat Bayrak</span>
        </div>
        <div className='mid'>
          <span>
            I'm a{' '}
            <Typical
              loop={Infinity}
              wrapper='n'
              steps={[
                'React',
                1000,
                'NodeJS',
                1000,
                'Front-end',
                1000,
                'Back-end',
                1000,
              ]}
            ></Typical>{' '}
            developer
          </span>
        </div>
        <div className='bottom'>
          {/* <button>Contact</button> */}
          <Button>
            <NavHashLink to='#contact' smooth>
              Contact
            </NavHashLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
