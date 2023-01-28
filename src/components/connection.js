
// Connect to the PostGreSQL database and storing the SignUp info

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');

app.use(bodyParser.json());

const config = {
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
};

const pool = new pg.Pool(config);

app.post('/submitform', (req, res) => {
  const { firstName, lastName, clipper, email, phone, pass } = req.body;

  pool.query('INSERT INTO form_submissions (firstName, lastName, clipper, email, phone, pass ) VALUES ($1, $2, $3, $4, $5, $6)', [firstName, lastName, clipper, email, phone, pass ], (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(result);
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
