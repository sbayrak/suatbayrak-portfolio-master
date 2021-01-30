import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NotFound from '../layout/404.svg';

const Error = () => {
  const styles = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 3000);
  });

  return (
    <div className='notfound' style={styles}>
      <img src={NotFound} alt='404' rel='noreferrer'></img>
    </div>
  );
};

export default Error;
