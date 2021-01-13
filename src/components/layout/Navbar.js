import React from 'react';
import '../../App.css';
import { Link, glide, Redirect } from 'react-tiger-transition';

const Navbar = () => {
  glide({
    name: 'glide-left',
    direction: 'left',
  });
  glide({
    name: 'glide-right',
    direction: 'right',
  });
  return (
    <div className='navbar'>
      <div className='links'>
        <ul>
          <li>
            <Link
              to='/'
              transition='glide-right'
              className={window.location.pathname === '/' && 'active'}
            >
              Home
            </Link>{' '}
          </li>
          <li>
            <Link
              to='/about'
              transition='glide-left'
              className={window.location.pathname === '/about' && 'active'}
            >
              About
            </Link>{' '}
          </li>
          <li>
            <Link
              to='/portfolio'
              transition='glide-left'
              className={window.location.pathname === '/portfolio' && 'active'}
            >
              Porfolio
            </Link>{' '}
          </li>
          <li>
            <Link
              to='/contact'
              transition='glide-left'
              className={window.location.pathname === '/contact' && 'active'}
            >
              Contact
            </Link>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
