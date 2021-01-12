import React from 'react';
import '../../App.css';
import { Link, glide, Redirect } from 'react-tiger-transition';

const Navbar = () => {
  glide({
    name: 'glide-left',
    direction: 'left',
  });
  return (
    <div className='navbar'>
      <div className='links'>
        <div id='setup'></div>
        <ul>
          <li>
            <Link to='/home' transition='glide-left' className='active'>
              Home
            </Link>{' '}
          </li>
          <li>
            <Link to='/about' transition='glide-left'>
              About
            </Link>{' '}
          </li>
          <li>
            <Link to='/portfolio' transition='glide-left'>
              Porfolio
            </Link>{' '}
          </li>
          <li>
            <Link to='/contact' transition='glide-left'>
              Contact
            </Link>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
