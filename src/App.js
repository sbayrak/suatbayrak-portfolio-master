import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import 'react-tiger-transition/styles/main.min.css';
// import { Navigation, Route } from 'react-tiger-transition';
import Index from './components/layout/Index';
import Navbar from './components/layout/Navbar';
import Error from '../src/components/pages/Error';
import Footer from './components/pages/Footer';
import { Provider } from 'react-redux';
import store from './store';

// document.getElementById('root').style.height = '100vh';
const App = ({ setAlert }) => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
