import React from 'react';
import Typical from 'react-typical';

const Home = () => {
  return (
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
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
