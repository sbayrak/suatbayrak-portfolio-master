import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import matrix from './matrix.gif';
import { Link, glide, Redirect } from 'react-tiger-transition';
import '../../App.css';

const Index = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push('/home');
  }, 6000);
  glide({
    name: 'glide-left',
    direction: 'left',
  });
  return (
    <div className='welcomer'>
      <Link
        className='welcomer-span2'
        to='/home'
        transition='glide-left'
      ></Link>
      <span className='welcomer-span'>Wake up, Neo.</span>
      <img className='welcomer-img' src={matrix} alt='matrix...' />
    </div>
  );
};

export default Index;
