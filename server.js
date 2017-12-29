var express = require('express');
var app = express();

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.sendFile('index.html',{ root : __dirname});
});

app.get('/facebook', function(req, res) {
	res.sendFile('fb.png',{ root : __dirname});
});

app.get('/instagram', function(req, res) {
	res.sendFile('instagram.png',{ root : __dirname});
});

app.get('/gmail', function(req, res) {
	res.sendFile('gmail.png',{ root : __dirname});
});

app.get('/tyrebuddies', function(req, res) {
	res.sendFile('tyrebuddies.png',{ root : __dirname});
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
