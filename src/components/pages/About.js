import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import sbayrak from '../layout/sbayrak.png';

const About = () => {
  const StyleAbout = {
    backgroundColor: '#191919',
    height: '100vh',
    width: 'calc(100% - 200px)',
    marginLeft: '100px',
    display: 'flex',
    position: 'relative',
    paddingTop: '7%',
  };

  const StyleAboutLeft = {
    width: '40%',
    padding: '0 7%',
  };

  const StyleAboutRight = {
    width: '60%',
    padding: '3% 10%',
  };
  return (
    <Fragment>
      <Navbar></Navbar>

      <div className='about' style={{ backgroundColor: '#191919' }}>
        <div className='about-wrapper' style={StyleAbout}>
          <div className='about-left' style={StyleAboutLeft}>
            <img
              src={sbayrak}
              alt='sbayrak'
              style={{ paddingTop: '15%' }}
            ></img>
          </div>
          <div className='about-right' style={StyleAboutRight}>
            <h1>About Me</h1>
            <p className='intro'>
              Hello again. <br></br>
              <br></br> I'm Suat Bayrak, graduated from Computer Engineer B.Sc.
              program. I chose the web development path because i really enjoy
              making websites both back-end and front-end. <br></br>
              <br></br> I started learning MERN stack and made some projects
              with it - you may check them on my GitHub repositories -
              Especially i enjoy dealing with NodeJS and React. <br></br>{' '}
              <br></br> As a junior developer, i'm more keen on team-play on
              projects. I have really strong googling skills which is really
              important in software world. I really enjoy learning new
              technologies along my journey. In my free time, I spend some of it
              on online courses.
            </p>
            <div className='skills'>
              <span>Skills</span>

              <ul>
                <li>
                  <span>Front-end :</span> ReactJS, Redux, HTML, CSS, JS{' '}
                </li>
                <li>
                  <span>Back-end : </span>NodeJS, Express, JS, NoSQL, MongoDB,
                  RESTAPI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
