const http = require('http');

const server = http.createServer((req, res) => {
  const { url } = req;
  const { method } = req;

  console.log(url);
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write(
      '<html><head><title>Users List</title></head><body><h1> Welcome to the Users List. Here you Can add new users =></h1>'
    );
    res.write(
      '<form method="post" action="create-user" ><input type="text" name="user"><button type="submit" name="user">Send</button></form>'
    );
    res.write('</body></html>');
    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write(
      '<html><head><title>Welcome to the /users Users List</title></head><body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>'
    );
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      //   console.log(parsedBody);
      const user = parsedBody.split('=')[1];
      console.log(user);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
});

server.listen(3000);
