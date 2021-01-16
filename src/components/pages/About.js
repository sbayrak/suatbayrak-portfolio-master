import React, { Fragment, useState } from 'react';
import Navbar from '../layout/Navbar';
import sbayrak from '../layout/sbayrak.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 395,
  },
  media: {
    height: 210,
    width: 395,
    backgroundSize: 'contain',
    backgroundColor: 'transparent',
    backgroundPosition: 'center',
  },
});
const About = () => {
  const classes = useStyles();

  const [skills, setSkills] = useState(true);
  const [educations, setEducations] = useState(false);
  const [certificates, setCertificates] = useState(false);
  const [languages, setLanguages] = useState(false);
  const StyleAbout = {
    backgroundColor: '#191919',
    height: '100vh',
    width: 'calc(100% - 200px)',
    marginLeft: '100px',
    display: 'flex',
    position: 'relative',
    paddingTop: '5%',
  };

  const StyleAboutLeft = {
    width: '40%',
    padding: '0 9%',
  };

  const StyleAboutRight = {
    width: '60%',
    padding: '3% 5%',
  };

  const skill = (
    <ul>
      <li>
        <span>Front-end :</span> ReactJS, Redux, HTML, CSS, JS{' '}
      </li>
      <li>
        <span>Back-end : </span>NodeJS, Express, JS, NoSQL, MongoDB, RESTAPI
      </li>
    </ul>
  );
  const education = (
    <ul>
      <li>
        <span>Istanbul Bilgi University , </span> Computer Engineering B.Sc.
        (English)
      </li>
    </ul>
  );
  const certificate = (
    <ul>
      <li>
        <span>Udemy , </span> React Front-to-Back
      </li>
      <li>
        <span>Udemy , </span> MERN Stack Front To Back: Full Stack React, Redux
        , Node.js
      </li>
      <li>
        <span>IELTS , </span> Overall 6.5
      </li>
    </ul>
  );
  const language = (
    <ul>
      <li>
        <span>English , Serbian , Turkish</span>
      </li>
    </ul>
  );
  function showSection(a) {
    if (a === 'skill') {
      setSkills(true);
      setLanguages(false);
      setEducations(false);
      setCertificates(false);
      console.log('skills fired');
      return skill;
    } else if (a === 'education') {
      setEducations(true);
      setSkills(false);
      setLanguages(false);
      setCertificates(false);
      return education;
    } else if (a === 'certificate') {
      setCertificates(true);
      setSkills(false);
      setLanguages(false);
      setEducations(false);
      return certificate;
    } else if (a === 'language') {
      setLanguages(true);
      setSkills(false);
      setCertificates(false);
      setEducations(false);
      return language;
    }
  }
  return (
    <Fragment>
      <Navbar></Navbar>

      <div className='about' style={{ backgroundColor: '#191919' }}>
        <div className='about-wrapper' style={StyleAbout}>
          <div className='about-left' style={StyleAboutLeft}>
            <Card
              className={classes.root}
              style={{ marginTop: '30%', height: '65%', paddingTop: '18%' }}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={sbayrak}
                  style={{ backgroundColor: 'transparent', width: '100%' }}
                  title='sbayrak'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Suat Bayrak
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Full-Stack web developer, mostly MERN stack.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small'>
                  <a
                    href='https://www.github.com/sbayrak'
                    target='_blank'
                    rel='noreferrer'
                    style={{
                      color: '#000',
                      fontSize: '18px',
                      textDecoration: 'none',
                      borderBottom: '1px solid black',
                      padding: '5px 15px',
                    }}
                  >
                    GitHub
                  </a>
                </Button>
                <Button size='small' color='primary'>
                  <a
                    href='https://www.linkedin.com/in/suat-bayrak-099299154/'
                    target='_blank'
                    rel='noreferrer'
                    style={{
                      color: '#000',
                      fontSize: '18px',
                      textDecoration: 'none',
                      borderBottom: '1px solid black',
                      padding: '5px 15px',
                    }}
                  >
                    Linkedin
                  </a>
                </Button>
              </CardActions>
            </Card>
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
              on online courses. <br></br> <br></br> To visit my projects,{' '}
              <a
                href='https://www.github.com/sbayrak'
                target='_blank'
                rel='noreferrer'
                style={{
                  fontSize: '24px',
                  textDecoration: 'none',
                  color: '#fff',
                  fontStyle: 'italic',
                }}
              >
                please click here.
              </a>
            </p>
            <div className='skills'>
              <span>
                <button
                  onClick={(e) => showSection('skill')}
                  className={skills && 'active'}
                >
                  Skills
                </button>

                <button
                  style={{ marginLeft: '30px' }}
                  onClick={(e) => showSection('education')}
                  className={educations && 'active'}
                >
                  Educations
                </button>

                <button
                  style={{ marginLeft: '30px' }}
                  onClick={(e) => showSection('certificate')}
                  className={certificates && 'active'}
                >
                  Certificates
                </button>

                <button
                  style={{ marginLeft: '30px' }}
                  onClick={(e) => showSection('language')}
                  className={languages && 'active'}
                >
                  Languages
                </button>
              </span>
              {skills ? skill : ''}
              {educations ? education : ''}
              {certificates ? certificate : ''}
              {languages ? language : ''}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
