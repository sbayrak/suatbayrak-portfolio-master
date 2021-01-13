import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'react-tiger-transition/styles/main.min.css';
import { Navigation, Route } from 'react-tiger-transition';
import Index from './components/layout/Index';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';

document.getElementById('root').style.height = '100vh';

const App = () => (
  <Router>
    <Navigation>
      <Route exact path='/about'>
        <About></About>
      </Route>
      <Route exact path='/'>
        <Index></Index>
      </Route>
    </Navigation>
  </Router>
);

export default App;
