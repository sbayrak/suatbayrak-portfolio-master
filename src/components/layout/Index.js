import React, { Fragment } from 'react';
import '../../App.css';
import About from '../pages/About';
import Inter1 from '../pages/Inter1';
import Inter2 from '../pages/Inter2';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Inter3 from '../pages/Inter3';
import Home from '../pages/Home';

const Index = () => {
  return (
    <Fragment>
      {/* welcomer ends above div */}
      <Home></Home>
      <Inter1></Inter1>
      <About></About>
      <Inter2></Inter2>
      {/* 
      
      <Portfolio></Portfolio>
      <Inter3></Inter3>
      <Contact></Contact> */}
    </Fragment>
  );
};

export default Index;
