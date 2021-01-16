import React, { Fragment, useState } from 'react';
import Navbar from '../layout/Navbar';
import '../../App.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  return (
    <Fragment>
      <Navbar></Navbar>
      <div
        className='contact'
        onMouseMove={(e) => console.log(e.clientY - e.target.offsetTop)}
      >
        <div className='contact-wrapper'>
          <div className='title'>
            <span>Contact me</span>
          </div>
          <div className='contact-form'>
            <form className='myform' action='#'>
              <input
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type='email'
                placeholder='Your E-Mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <textarea
                placeholder='Your message'
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
