import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import EightBitForest from '../layout/8bitforest.png';
import mern from '../layout/mern.jpg';
import reactlogo from '../layout/react-logo.png';

const Portfolio = () => {
  const parags =
    ' AuctionHouse is a tender based web application where the companies may register with requested mandatoryinformations and open a tender and get offers from othercompanies';
  const parags2 =
    'Medium size social media for developers, where you can create a profile, education information, make posts, comment and like functionality';
  const parags3 =
    'Single page app, using PokemonAPI with pagination functionality';

  const parags4 =
    'A single page react app uses BreakingBadAPI and displays Breaking Bad characters with Search input';

  return (
    <Fragment>
      <div className='portfolio'>
        <div className='portfolio-wrapper'>
          <div className='repos'>
            <div className='card'>
              <div className='card-img'>
                <img src={mern} alt='mern' />
              </div>
              <div className='card-title'>
                <span>AuctionHouse</span>
              </div>
              <div className='card-desc'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae suscipit asperiores ipsam, dolorem saepe a
                  facilis? Qui mollitia ea quibusdam!
                </p>
              </div>
              <div className='card-links'>
                <a
                  href='https://www.github.com/sbayrak'
                  target='_blank'
                  rel='noreferrer'
                >
                  Repository
                </a>
              </div>
            </div>
            <div className='card'>
              <div className='card-img'>
                <img src={mern} alt='mern' />
              </div>
              <div className='card-title'>
                <span>AuctionHouse</span>
              </div>
              <div className='card-desc'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae suscipit asperiores ipsam, dolorem saepe a
                  facilis? Qui mollitia ea quibusdam!
                </p>
              </div>
              <div className='card-links'>
                <a
                  href='https://www.github.com/sbayrak'
                  target='_blank'
                  rel='noreferrer'
                >
                  Repository
                </a>
              </div>
            </div>
            <div className='card'>
              <div className='card-img'>
                <img src={mern} alt='mern' />
              </div>
              <div className='card-title'>
                <span>AuctionHouse</span>
              </div>
              <div className='card-desc'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae suscipit asperiores ipsam, dolorem saepe a
                  facilis? Qui mollitia ea quibusdam!
                </p>
              </div>
              <div className='card-links'>
                <a
                  href='https://www.github.com/sbayrak'
                  target='_blank'
                  rel='noreferrer'
                >
                  Repository
                </a>
              </div>
            </div>
            <div className='card'>
              <div className='card-img'>
                <img src={mern} alt='mern' />
              </div>
              <div className='card-title'>
                <span>AuctionHouse</span>
              </div>
              <div className='card-desc'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae suscipit asperiores ipsam, dolorem saepe a
                  facilis? Qui mollitia ea quibusdam!
                </p>
              </div>
              <div className='card-links'>
                <a
                  href='https://www.github.com/sbayrak'
                  target='_blank'
                  rel='noreferrer'
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
