import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import 'react-tiger-transition/styles/main.min.css';
// import { Navigation, Route } from 'react-tiger-transition';
import Index from './components/layout/Index';
import Navbar from './components/layout/Navbar';
import Error from '../src/components/pages/Error';
import Footer from './components/pages/Footer';

// document.getElementById('root').style.height = '100vh';

const App = () => (
  <Router>
    {/* <Navigation> */}
    <Navbar></Navbar>
    <Switch>
      {/* <Route exact path='/' component={Index}></Route> */}
      <Route exact path='/' component={Index}></Route>
      <Route component={Error}></Route>
      {/* </Navigation> */}
    </Switch>
    <Footer></Footer>
  </Router>
);

export default App;
