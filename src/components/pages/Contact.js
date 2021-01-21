import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && emailIsValid(email) && message) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: name.trim(),
          email: email,
          message: message.trim(),
        }),
      })
        .then((res) => {
          redirectAfterSubmission();
        })
        .catch((error) => alert(error));
    }
  };

  const redirectAfterSubmission = () => {
    setTimeout(() => {
      history.push('/success');
    }, 1500);
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
              onSubmit={handleSubmit}
              data-netlify='true'
              name='contact'
              data-netlify-recaptcha='true'
              method='post'
            >
              <input type='hidden' name='form-name' value='contact'></input>
              <input
                type='text'
                placeholder='Your Name'
                name='name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type='email'
                placeholder='Your E-Mail'
                name='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <textarea
                placeholder='Your message'
                name='message'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div data-netlify-recaptcha='true'></div>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
