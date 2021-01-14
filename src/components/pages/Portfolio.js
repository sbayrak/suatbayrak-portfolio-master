import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import sbayrak from '../layout/sbayrak.png';

const Portfolio = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className='portfolio'>
        <div className='portfolio-wrapper'>
          <div className='card'>
            <div className='card-title'>
              <a
                href='https://github.com/sbayrak/auctionhouse'
                target='_blank'
                rel='noreferrer'
              >
                AuctionHouse
              </a>
            </div>
            <div className='card-img'></div>
            <div className='card-box'>
              AuctionHouse is a tender based web application where the companies
              may register with requested mandatory informations (tax number,
              website, tax office name, etc...) and open a tender and get offers
              from other companies.
            </div>
            <div className='card-links'>
              <a
                href='https://github.com/sbayrak/auctionhouse'
                target='_blank'
                rel='noreferrer'
              >
                Repo
              </a>
              <a
                href='https://auctionhouse12.herokuapp.com'
                target='_blank'
                rel='noreferrer'
              >
                Website
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <a
                href='https://github.com/sbayrak/mern-devconnector'
                target='_blank'
                rel='noreferrer'
              >
                mern-devconnector
              </a>
            </div>
            <div className='card-img'></div>
            <div className='card-box'>
              A small social network app for developers.
            </div>
            <div className='card-links'>
              <a
                href='https://github.com/sbayrak/mern-devconnector'
                target='_blank'
                rel='noreferrer'
              >
                Repo
              </a>
              <a
                href='https://devconnector52.herokuapp.com/'
                target='_blank'
                rel='noreferrer'
              >
                Website
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <a
                href='https://github.com/sbayrak/mern-contactkeeper'
                target='_blank'
                rel='noreferrer'
              >
                mern-contactkeeper
              </a>
            </div>
            <div className='card-img'></div>
            <div className='card-box'>
              Single page app to keep recordings of your contacts
            </div>
            <div className='card-links'>
              <a
                href='https://github.com/sbayrak/mern-contactkeeper'
                target='_blank'
                rel='noreferrer'
              >
                Repo
              </a>
              <a href='/portfolio' target='_blank' rel='noreferrer'>
                Website
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <a
                href='https://react-pokemonapi.web.app/'
                target='_blank'
                rel='noreferrer'
              >
                react-pokemonapi
              </a>
            </div>
            <div className='card-img'></div>
            <div className='card-box'>
              A single page react app to display pokemons from PokemonAPI,
              including Previous and Next pages.
            </div>
            <div className='card-links'>
              <a
                href='https://github.com/sbayrak/react-pokemonapi'
                target='_blank'
                rel='noreferrer'
              >
                Repo
              </a>
              <a
                href='https://react-pokemonapi.web.app/'
                target='_blank'
                rel='noreferrer'
              >
                Website
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <a
                href='https://github.com/sbayrak/breakingbad-api-react'
                target='_blank'
                rel='noreferrer'
              >
                breakingbad-api-react
              </a>
            </div>
            <div className='card-img'></div>
            <div className='card-box'>
              A react app using breakingbadAPI with search bar.
            </div>
            <div className='card-links'>
              <a
                href='https://github.com/sbayrak/breakingbad-api-react'
                target='_blank'
                rel='noreferrer'
              >
                Repo
              </a>
              <a
                href='https://github.com/sbayrak/breakingbad-api-react'
                target='_blank'
                rel='noreferrer'
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
