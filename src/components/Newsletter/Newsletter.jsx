import React, { useState } from 'react';
import './Newsletter.css';
import axios from 'axios';
const Newsletter = () => {
  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit2 = () => {
    if (email.trim() !== "") {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setFirstName(''); // Reset first name input
        setLastName(''); // Reset last name input
        setEmail(''); // Reset email input
      }, 2000); // Reset message and hide confirmation after 2 seconds
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
      const response = await axios.post('http://localhost:3000', {
        firstName,
        lastName,
        email,
      });

  //  const data = await response.json();

    if (response.data) {
      setFirstName(''); // Reset first name input
      setLastName(''); // Reset last name input
      setEmail(''); // Reset email input
      setMessage('subscription successful');
    } else {
      setMessage('error');
    }
  
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title">Newsletter</h2>
        <form className="newsletter-form" /*onSubmit={handleSubmit}*/>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button  className="subscribe-button" onClick={handleSubmit2}>Subscribe</button>
        </form>
        {isSent && alert("Subscription Successful")}
      </div>
    </section>
  );
}

export default Newsletter;


/* 2 import React, { useState } from 'react';
import './Newsletter.css';
import  Alert  from '@mui/material/Alert';
import axios from 'axios';
const Newsletter = () => {
  function myFunction() {
   <Alert severity="success">Subscription Successful</Alert>
  }
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
      const response = await axios.post('http://localhost:3000', {
        firstName,
        lastName,
        email,
      });

  //  const data = await response.json();

    if (response.data) {
      setFirstName(''); // Reset first name input
      setLastName(''); // Reset last name input
      setEmail(''); // Reset email input
      setMessage('subscription successful');
    } else {
      setMessage('error');
    }
  
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title">Newsletter</h2>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="subscribe-button" onClick={myFunction()}>Subscribe</button>
        </form>
        {message && <p style={{margin:'0.25rem'}}>{message}</p>}
      </div>
    </section>
  );
}

export default Newsletter;*/


/*import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title">Newsletter</h2>
        <form className="newsletter-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;*/
