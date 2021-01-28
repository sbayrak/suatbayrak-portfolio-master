import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import myLogo from './myLogo.png';
import '../../App.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [bgColor, setBgColor] = useState('rgba(0,0,0,.1)');

  useEffect(() => {
    let listener = null;
    // eslint-disable-next-line no-unused-vars
    listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 200) {
        setBgColor('rgba(0,0,0,.9)');
      } else if (scrolled < 200) {
        setBgColor('rgba(0,0,0,.1)');
      }
    });
  });

  const menuFunc = (e) => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <div
        className='navbar'
        style={{ transition: 'ease-in-out 0.5s', backgroundColor: bgColor }}
      >
        <div className='navbar-wrapper'>
          <div className='left'>
            <img src={myLogo} alt='logo' />
            <span id='name'>Suat Bayrak</span>
          </div>
          <div className='right'>
            <i className='fas fa-bars' onClick={(e) => menuFunc(e)}></i>
            <ul className={showMenu ? 'active' : ''}>
              <li>
                <NavLink to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' exact activeClassName='active'>
                  About
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink to='/portfolio' exact activeClassName='active'>
                  Porfolio
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' exact activeClassName='active'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
