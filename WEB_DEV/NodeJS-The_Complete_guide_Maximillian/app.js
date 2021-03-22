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

const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.hanler);

server.listen(8080);
