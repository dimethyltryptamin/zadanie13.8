var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('index.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
    } else {
		response.statusCode = 404;
		var img = fs.readFileSync('./404.png');
       	response.writeHead(404, {'Content-Type': 'image/png' });
        response.end(img, 'binary');
  	}
});

server.listen(8080);