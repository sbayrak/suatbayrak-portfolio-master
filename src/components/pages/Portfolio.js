import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { Grid } from '@material-ui/core';
import EightBitForest from '../layout/8bitforest.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mern from '../layout/mern.jpg';
import reactlogo from '../layout/react-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 'calc(100% - 200px)',
    marginLeft: '100px',
    position: 'relative',
    top: '10%',
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar></Navbar>
      <div
        className='porfolio'
        style={{
          backgroundImage: 'url(' + EightBitForest + ' )',
          height: '110vh',
        }}
      >
        <div className={classes.root}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Card
                className={classes.root}
                sm
                style={{ boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.49)' }}
              >
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='auctionhouse'
                    height='90'
                    sm
                    image={mern}
                    style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    title='auctionhouse'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      auctionhouse
                    </Typography>
                    <Typography
                      variant='body2'
                      sm
                      color='textSecondary'
                      component='p'
                    >
                      AuctionHouse is a tender based web application where the
                      companies may register with requested mandatory
                      informations and open a tender and get offers from other
                      companies.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='medium' color='primary'>
                    <a
                      href='https://www.github.com/sbayrak/auctionhouse'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        textDecoration: 'none',
                        fontStyle: 'italic',
                        color: '#191919',
                      }}
                    >
                      Repository
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                className={classes.root}
                style={{ boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.49)' }}
              >
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='mern-devconnector'
                    height='90'
                    image={mern}
                    style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    title='mern-devconnector'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      DevConnector
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Medium size social media for developers, where you can
                      create a profile, education information, make posts,
                      comment and like functionality
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='medium' color='primary'>
                    <a
                      href='https://www.github.com/sbayrak/mern-devconnector'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        textDecoration: 'none',
                        fontStyle: 'italic',
                        color: '#191919',
                      }}
                    >
                      Repository
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                className={classes.root}
                style={{ boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.49)' }}
              >
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height='90'
                    style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    image={reactlogo}
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      React-PokemonAPI
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Single page app, using PokemonAPI with pagination
                      functionality
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='medium' color='primary'>
                    <a
                      href='https://www.github.com/sbayrak/react-pokemonapi'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        textDecoration: 'none',
                        fontStyle: 'italic',
                        color: '#191919',
                      }}
                    >
                      Repository
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                className={classes.root}
                style={{ boxShadow: '0px 0px 14px 3px rgba(0, 0, 0, 0.49)' }}
              >
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='breakingbadapi'
                    height='90'
                    image={reactlogo}
                    title='breakingbadapi'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      BreakingBadAPI
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      A single page react app uses BreakingBadAPI and displays
                      Breaking Bad characters with Search input
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='medium' color='primary'>
                    <a
                      href='https://github.com/sbayrak/breakingbad-api-react'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        textDecoration: 'none',
                        fontStyle: 'italic',
                        color: '#191919',
                      }}
                    >
                      Repository
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
