const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  res.send('<h1>Dummy User</h1>');
});
app.use('/', (req, res, next) => {
  console.log('Middleware 1 Initiated');
  next();
});
app.use('/', (req, res, next) => {
  console.log('Middleware 2 Initiated');
  res.send('<h1>Hello from</h1>');
});

app.listen(3000);
