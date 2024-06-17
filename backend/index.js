const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'RaNa!001', // Replace with your MySQL password
  database: 'newsletter'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*
// Route to handle newsletter subscription
app.post('/', (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).send({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO subscriptions (first_name, last_name, email) VALUES (Ramen, Murry , ramenm@gmail.com )';
  db.query(query, [firstName, lastName, email], (err, results) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).send({ error: 'Email already subscribed' });
      }
      return res.status(500).send({ error: 'Database error' });
    }
    res.status(200).send({ message: 'Subscription successful' });
  });
});

*/

const API_URL = 'https://localhost:3001/'; // replace with your API URL

const subscribeToNewsletter = (firstName, lastName, email) => {
  axios.post(API_URL, {
    firstName,
    lastName,
    email
  })
  .then(response => {
    if (response.status === 201) {
      return true;
    } else {
      throw new Error('Error subscribing to newsletter');
    }
  })
  .catch(error => {
    console.error(error);
    return false;
  });
};

export default subscribeToNewsletter;

db.query("select * from subscriptions",(err,result)=>{
    if(err)
    {
      console.warn(err)
    }
    else{
      console.warn(result)
    }
  })
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
