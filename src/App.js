import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'react-tiger-transition/styles/main.min.css';
import { Navigation, Route } from 'react-tiger-transition';
import Home from './components/pages/Home';
import Index from './components/layout/Index';
import Navbar from './components/layout/Navbar';

document.getElementById('root').style.height = '100vh';

export default () => (
  <Router>
    <Navigation>
      <Route exact path='/home'>
        <Home></Home>
      </Route>
      <Route exact path='/'>
        <Index></Index>
      </Route>
    </Navigation>
  </Router>
);
