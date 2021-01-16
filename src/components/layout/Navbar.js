import React, { Fragment, useState } from 'react';
import '../../App.css';
import { Link, glide } from 'react-tiger-transition';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  glide({
    name: 'glide-left',
    direction: 'left',
  });
  glide({
    name: 'glide-right',
    direction: 'right',
  });
  return (
    <Fragment>
      <button
        style={{
          position: 'absolute',
          cursor: 'pointer',
          left: showMenu ? '-100%' : '0',
          transition: 'ease-in-out .7s',
        }}
        id='btnMenu'
        onClick={(e) => setShowMenu(!showMenu)}
      >
        <i
          className='fas fa-bars'
          style={{
            position: 'absolute',
            fontSize: '54px',
            padding: '30px 40px',
            cursor: 'pointer',
            color: '#fff',
          }}
        ></i>
      </button>
      <div className={showMenu ? 'navbar active' : 'navbar'}>
        <div className='links'>
          <i
            className='fas fa-arrow-left'
            onClick={(e) => setShowMenu(!showMenu)}
          ></i>
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
                className={
                  window.location.pathname === '/portfolio' && 'active'
                }
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
    </Fragment>
  );
};

export default Navbar;
