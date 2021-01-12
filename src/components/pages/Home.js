import React from 'react';
import '../../App.css';
import Navbar from '../layout/Navbar';
import { Screen, Link, glide } from 'react-tiger-transition';
const Home = () => {
  glide({
    name: 'glide-right',
    direction: 'right',
  });
  console.log(window.location.pathname);

  return (
    <div className='home'>
      <Navbar></Navbar>
      <Link to='/' transition='glide-right'>
        Index
      </Link>
    </div>
  );
};

export default Home;
