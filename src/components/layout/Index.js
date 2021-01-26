import React from 'react';
import sbayrak from './sbayrak.jpg';
import '../../App.css';
import About from '../pages/About';
import Typical from 'react-typical';

const Index = () => {
  return (
    <div className='main'>
      <div className='welcomer'>
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
          </div>
          <div className='bottom'>
            <button>Contact</button>
          </div>
        </div>
      </div>
      {/* welcomer ends above div */}
      <div className='inter1'>
        <div className='inter1-wrapper'>
          <span>Go into my GitHub Repository</span>
          <a
            href='https://www.github.com/sbayrak'
            target='_blank'
            rel='noreferrer'
          >
            <i class='fab fa-github'></i>
          </a>
        </div>
      </div>
      <About></About>
    </div>
  );
};

export default Index;
