import React, { Fragment } from 'react';
import '../../App.css';
// const encode = (data) => {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&');
// };
const Contact = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [text, setText] = useState('');

  // const handleSubmit = (e) => {
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({
  //       'form-name': 'contact',
  //       name: name,
  //       email: email,
  //       text: text,
  //     }),
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => alert(error));

  //   e.preventDefault();
  // };
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
              method='post'
              name='contact'
              netlify
              data-netlify='true'
            >
              <input type='hidden' name='form-name' value='contact'></input>
              <label htmlFor='name'>Your name: </label>
              <input
                type='text'
                placeholder='Your Name'
                name='name'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              ></input>
              <label htmlFor='email'>Your Email: </label>
              <input
                type='email'
                placeholder='Your E-Mail'
                name='email'
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label htmlFor='message'>
                Your message:
                <textarea
                  placeholder='Your message'
                  name='message'
                  // value={text}
                  // onChange={(e) => setText(e.target.value)}
                ></textarea>
              </label>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
