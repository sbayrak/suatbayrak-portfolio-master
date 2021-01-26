import React, { Fragment } from 'react';
import sbayrak from '../layout/sbayrak.jpg';

const About = () => {
  return (
    <Fragment>
      <div className='about'>
        <div className='top'>
          <span>ABOUT ME</span>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img src={sbayrak} alt='sbayrak' rel='noreferrer'></img>
          </div>
          <div className='right'>
            <span id='span1'>
              {' '}
              &nbsp; &nbsp; &nbsp; I graduated from Computer Engineering B.Sc.
              at 2021. I have found that I enjoy the most; Web Development
              compared to other fields of coding world. I took several courses
              from different areas such as cloud computing; worked on Microsoft
              Azure, Data Science , Cryptography, Cryptocurrencies and
              Blockchain...
            </span>
            <span>
              &nbsp; &nbsp; &nbsp; I code both front and back-end. Generally, I
              use ReactJS/Redux for front-end and NodeJS for back-end. I like to
              work on No-SQL databases such as MongoDB. For deployment of the
              site, I use Heroku or Netlify to test it out, Amazon AWS to
              deploy.{' '}
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
