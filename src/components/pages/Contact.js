import React, { Fragment, useState } from 'react';
import '../../App.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: name,
        email: email,
        text: text,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => alert(error));
  };
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
              name='contact'
              data-netlify='true'
              onSubmit={(e) => handleSubmit(e)}
            >
              <input type='hidden' name='form-name' value='contact'></input>
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
