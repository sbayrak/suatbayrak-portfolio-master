import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import matrix from './matrix.gif';
import bgvid from './bgvid.mp4';
import sbayrak from './sbayrak.jpg';
import { Link, glide, Redirect } from 'react-tiger-transition';
import '../../App.css';
import Navbar from './Navbar';

const Index = () => {
  const history = useHistory();

  glide({
    name: 'glide-left',
    direction: 'left',
  });
  return (
    <div className='welcomer'>
      <Navbar></Navbar>
      <Link
        className='welcomer-span2'
        to='/about'
        transition='glide-left'
      ></Link>
      <img src={sbayrak}></img>
      <span className='welcomer-span'>Hi, Im Suat Bayrak</span>

      <div className='mid'>
        <span>Full stack web developer</span>
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
            <a href='https://github.com/sbayrak' target='_blank'>
              <i class='fab fa-instagram'> </i>
            </a>{' '}
          </li>
          <li>
            <a href='https://github.com/sbayrak' target='_blank'>
              <i class='fab fa-github'> </i>
            </a>{' '}
          </li>
          <li>
            <a href='https://github.com/sbayrak' target='_blank'>
              <i class='fab fa-linkedin'> </i>
            </a>{' '}
          </li>
        </ul>
        <Link to='/contact' transition='glide-left' id='contact'>
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
