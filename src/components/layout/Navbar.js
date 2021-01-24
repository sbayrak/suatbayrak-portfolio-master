import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <button
        style={{
          // position: 'absolute',
          // cursor: 'pointer',
          left: showMenu ? '-100%' : '0',
          // transition: 'ease-in-out .7s',
        }}
        id='btnMenu'
        onClick={(e) => setShowMenu(!showMenu)}
      >
        <i
          className='fas fa-bars'
          style={
            {
              // position: 'absolute',
              // fontSize: '54px',
              // padding: '30px 40px',
              // cursor: 'pointer',
              // color: '#fff',
            }
          }
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
    </Fragment>
  );
};

export default Navbar;
