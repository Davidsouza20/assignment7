var http = require('http');

//create a server object:
http.createServer(function (req, res) {
 if (req.url == '/home') {
   res.end("<h1>Welcome to home page</h1>");
}
	

if (req.url == '/getData') {
   res.end(JSON.stringify({name: "David Souza", class: "cs313"}));
}

if (req.url == '/numOne' + numTwo ) {
   res.end(JSON.stringify({name: "David Souza", class: "cs313"}));
}

else  {
   res.end("<h1>404 Page not found</h1>");
}

}).listen(8080); //the server object listens on port 8080


