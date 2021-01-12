import React from 'react';
import { Redirect, useHistory, Link } from 'react-router-dom';
import matrix from './matrix.gif';
import '../../App.css';

const Index = () => {
  // const history = useHistory();
  // setTimeout(() => {
  //   history.push('/home');
  // }, 2000);

  return (
    <div className='welcomer'>
      <Link to='/home' transition='glide-left'>
        home
      </Link>
      <span className='welcomer-span'>Wake up, Neo.</span>
      <img className='welcomer-img' src={matrix} alt='matrix...' />
    </div>
  );
};

export default Index;
