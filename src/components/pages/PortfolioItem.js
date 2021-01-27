import React from 'react'
import reactlogo from '../layout/react-logo.png';
import mern from '../layout/mern.jpg';

const PortfolioItem = ({repo}) => {
    
    return (
        <div className='card'>
        <div className='card-img'>
          <img src={repo.img === 'mern'  ? mern : reactlogo  } alt='mern' />
        </div>
        <div className='card-title'>
          <span>{repo.title}</span>
        </div>
        <div className='card-desc'>
          <p>{repo.desc}</p>
        </div>
        <div className='card-links'>
          <a
            href={repo.link}
            target='_blank'
            rel='noreferrer'
          >
            Repository
          </a>
        </div>
      </div>
    )
}

export default PortfolioItem
