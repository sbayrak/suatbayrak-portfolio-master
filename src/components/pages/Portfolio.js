import React, { Fragment } from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const repos = [
    {
      title: 'AuctionHouse',
      desc:
        'AuctionHouse is a tender based web application where the companies and open a tender and get offers from other companies',
      link: 'https://www.github.com/sbayrak/auctionhouse',
      img: 'mern',
    },
    {
      title: 'DevConnector',
      desc:
        'Medium size social media for developers, where you can create a profile, education information, make posts, comment and like functionality',
      link: 'https://github.com/sbayrak/mern-devconnector',
      img: 'mern',
    },
    {
      title: 'React-PokemonAPI',
      desc:
        'Single page app, using PokemonAPI with pagination functionality,   deployed on Firebase also uses custom pokemon spinner  ',
      link: 'https://github.com/sbayrak/react-pokemonapi',
      img: 'react',
    },
    {
      title: 'BreakingBadAPI-React',
      desc:
        'A single page react app uses BreakingBadAPI and displays Breaking Bad characters with Search input',
      link: 'https://github.com/sbayrak/breakingbad-api-react',
      img: 'react',
    },
  ];

  return (
    <Fragment>
      <div className='portfolio' id='portfolio'>
        <span id='title'>Portfolio</span>
        <div className='portfolio-wrapper'>
          <div className='repos'>
            {repos.map((repo) => (
              <PortfolioItem key={repo.title} repo={repo}></PortfolioItem>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
