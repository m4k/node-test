var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, resp){
  var url_parts = url.parse(req.url);
  var path = url_parts.pathname;

  fs.readFile( __dirname + path , function(err, data){
    if(err){
      resp.writeHead(404, {'Content-Type': 'text/html'});
      resp.write('Not Found');
    }else{
      resp.writeHead(200, {'Content-Type': 'text/html'});
      resp.write(data);
    }
    resp.end();

  });

});

server.listen(3000);
