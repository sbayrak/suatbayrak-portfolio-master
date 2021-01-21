import React from 'react';
import sbayrak from './sbayrak.jpg';
import '../../App.css';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className='welcomer'>
      <div className='welcomer-wrapper'>
        <div className='top'>
          <img src={sbayrak} alt='sbayrak...'></img>
          <span>Hi, I'm Suat Bayrak</span>
        </div>
        <div className='mid'>
          <span>
            {' '}
            I'm a{' '}
            <Typical
              loop={Infinity}
              wrapper='n'
              steps={[
                'Full stack',
                1000,
                'React',
                1000,
                'NodeJS',
                1000,
                'Front-end',
                1000,
                'Back-end',
                1000,
              ]}
            ></Typical>
            developer
          </span>
          <ul>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className='bottom'>
          <ul>
            <li>
              <a
                href='https://www.github.com/sbayrak'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <i class='fab fa-instagram'></i>
              </a>{' '}
            </li>
            <li>
              <a
                href='https://www.github.com/sbayrak'
                target='_blank'
                rel='noreferrer'
              >
                <i class='fab fa-github'></i>
              </a>{' '}
            </li>
            <li>
              <a
                href='https://www.github.com/sbayrak'
                target='_blank'
                rel='noreferrer'
              >
                <i class='fab fa-linkedin'></i>
              </a>{' '}
            </li>
          </ul>
          <Link to='/contact' id='contact'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
