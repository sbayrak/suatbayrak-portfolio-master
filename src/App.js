import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import 'react-tiger-transition/styles/main.min.css';
// import { Navigation, Route } from 'react-tiger-transition';
import Index from './components/layout/Index';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Success from './components/pages/Success';
import Navbar from './components/layout/Navbar';

// document.getElementById('root').style.height = '100vh';

const App = () => (
  <Router>
    {/* <Navigation> */}
    <Navbar></Navbar>
    <Switch>
      <Route exact path='/'>
        <Index></Index>
      </Route>
      <Route exact path='/about'>
        <About></About>
      </Route>
      <Route exact path='/portfolio'>
        <Portfolio></Portfolio>
      </Route>
      <Route exact path='/contact'>
        <Contact></Contact>
      </Route>
      <Route exact path='/success'>
        <Success></Success>
      </Route>

      {/* </Navigation> */}
    </Switch>
  </Router>
);

export default App;
