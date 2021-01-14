import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-tiger-transition/styles/main.min.css';
import { Navigation, Route } from 'react-tiger-transition';
import Index from './components/layout/Index';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';

document.getElementById('root').style.height = '100vh';

const App = () => (
  <Router>
    <Navigation>
      <Route exact path='/about'>
        <About></About>
      </Route>
      <Route exact path='/portfolio'>
        <Portfolio></Portfolio>
      </Route>
      <Route exact path='/'>
        <Index></Index>
      </Route>
    </Navigation>
  </Router>
);

export default App;
