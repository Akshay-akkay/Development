const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const users = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  //   res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index');
});

app.post('/users', (req, res, next) => {
  //   res.sendFile(path.join(__dirname, 'views', 'index.html'));
  const { username } = req.body;
  console.log(username);
  users.push(username);
  console.log(users);
  res.redirect('/users');
});

app.get('/users', (req, res, next) => {
  //   res.sendFile(path.join(__dirname, 'views', 'users.html'));
  res.render('users', { users });
});

app.listen(3001);
