import React from 'react';
import bgvid from './bgvid.mp4';
import sbayrak from './sbayrak.jpg';
// import { Link, glide } from 'react-tiger-transition';
import '../../App.css';
import Navbar from './Navbar';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

const Index = () => {
  // glide({
  //   name: 'glide-left',
  //   direction: 'left',
  // });
  return (
    <div className='welcomer'>
      {/* <Link
        className='welcomer-span2'
        to='/about'
        transition='glide-left'
      ></Link> */}
      <img src={sbayrak} alt='loading....'></img>
      <span className='welcomer-span'>Hi, I'm Suat Bayrak</span>

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
              href='https://github.com/sbayrak'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-instagram'> </i>
            </a>{' '}
          </li>
          <li>
            <a
              href='https://github.com/sbayrak'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-github'> </i>
            </a>{' '}
          </li>
          <li>
            <a
              href='https://github.com/sbayrak'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-linkedin'> </i>
            </a>{' '}
          </li>
        </ul>
        <Link to='/contact' id='contact'>
          Contact
        </Link>
      </div>
      <span style={{ position: 'absolute', bottom: 0, color: '#03a062' }}>
        Wake up, Neo.
      </span>
      <video autoPlay muted loop>
        <source src={bgvid} type='video/mp4' />{' '}
      </video>
    </div>
  );
};

export default Index;
