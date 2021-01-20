import React, { Fragment, useState } from 'react';
import Navbar from '../layout/Navbar';
import '../../App.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  return (
    <Fragment>
      <div className='contact'>
        <div className='contact-wrapper'>
          <div className='title'>
            <span>Contact me</span>
          </div>
          <div className='contact-form'>
            <form
              className='myform'
              method='POST'
              name='contact v1'
              data-netlify='true'
              action='/success'
              onSubmit='submit'
              data-netlify-honeypot='bot-field'
            >
              <input type='hidden' name='form-name' value='contact v1'></input>
              <div hidden>
                <input name='bot-field'></input>
              </div>
              <input
                type='text'
                placeholder='Your Name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type='email'
                placeholder='Your E-Mail'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <textarea
                placeholder='Your message'
                name='message'
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
