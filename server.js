const express = require('express');
const app = express();
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const bodyParser = require('body-parser');


//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//baza de date
const db = require('./config/keys.js').mongoURI;

//conectare la baza de date
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

// npm run server