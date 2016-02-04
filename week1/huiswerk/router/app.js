var http = require('http'),
    url = require('url');
http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  if (pathname === '/') {
      res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Home Page\n')
  } else if (pathname === '/about') {
      res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('About Us\n')
  } else if (pathname === '/redirect') {
      res.writeHead(301, {
      'Location': 'http://www.google.com'
    });
    res.end();
  } else {
    res.writeHead(404, {
    'Content-Type': 'text/plain'
    });
    res.end('Page not found\n')
  } 
}).listen(8080);