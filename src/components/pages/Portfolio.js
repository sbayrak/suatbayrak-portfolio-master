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
              <a href='#'>Title</a>
            </div>
            <div className='card-img'>
              <img
                src={sbayrak}
                style={{ width: '100%', height: '100px' }}
                alt=''
              />
            </div>
            <div className='card-box'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              eligendi earum exercitationem repellendus! Voluptatum, eius.
              Molestias magni dolore laudantium officia!
            </div>
            <div className='card-links'>
              <a href='#'>Repo</a>
              <a href='#'>Site</a>
            </div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <a href='#'>Title</a>
            </div>
            <div className='card-img'>
              <img src={sbayrak} style={{ width: '100px' }} alt='' />
            </div>
            <div className='card-box'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              eligendi earum exercitationem repellendus! Voluptatum, eius.
              Molestias magni dolore laudantium officia!
            </div>
            <div className='card-links'>
              <a href='#'>Repo</a>
              <a href='#'>Site</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
