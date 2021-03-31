// ANCHOR Section 2
// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, 1500);
//   });
//   return promise;
// };

// setTimeout(() => {
//   console.log('Timer is Done!');
//   fetchData()
//     .then((text) => {
//       console.log(text);
//       return fetchData();
//     })
//     .then((text2) => {
//       console.log(text2);
//     });
// }, 2000);

// console.log('Helo!');
// console.log('Hi!');

// ANCHOR Section 3

// const http = require('http');
// const routes = require('./routes');

// const server = http.createServer(routes.hanler);

// server.listen(2424);

// ANCHOR Section 5 -> Express.JS

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const app = express();

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: 'Page not found!', path: '404.html' });
});

app.listen(3000);
