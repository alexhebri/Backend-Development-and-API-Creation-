const express = require('express');
const app = express();
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//baza de date
const db = require('./config/keys.js').mongoURI;

//conectare la baza de date
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));  


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// npm run server