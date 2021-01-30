import React from 'react';

const Inter2 = () => {
  return (
    <div className='inter2'>
      <div className='inter2-wrapper'>
        <div className='top'>
          <span>Links to my accounts</span>
        </div>
        <div className='bottom'>
          <ul>
            <li>
              <a
                href='https://www.instagram.com/sbayrak__/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-instagram'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/suat-bayrak/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.github.com/sbayrak'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-github'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inter2;
