import React from 'react';
import '../../App.css';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <span>Suat Bayrak</span>
      </div>
      <div className='links'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
