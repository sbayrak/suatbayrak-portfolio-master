import React from 'react';
import '../../App.css';
import About from '../pages/About';
import Typical from 'react-typical';
import Inter1 from '../pages/Inter1';
import Inter2 from '../pages/Inter2';

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
      <Inter1></Inter1>
      <About></About>
      <Inter2></Inter2>
    </div>
  );
};

export default Index;
