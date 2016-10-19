var express = require('express');
var bodyParser = require('body-parser');

var books = ['1984', 'Grapes of Wrath', 'To Kill a Mockingbird'];

var app = express();

//always parse http body as json
//assigns result to req.body
app.use(bodyParser.json());

//must be an http GET method
app.get('/books', function(req, res, next){
  res.send(books);
});

//must be an http POST method
//if path === '/books'
//then run the callback function
app.post('/books', function(req, res, next){
  books.push(req.body.name);
  res.send(books);
});

app.put('/books', function(req, res, next){
  var newPosition = req.body.position;
  books[newPosition] = req.body.newName;
  res.send(books);
});

//req.params = { id: ? }
app.delete('/books/:id', function(req, res, next){
  books.slice(req.params.id, 1);
  res.send(books);
});

var port = 3000;
app.listen(port, function() {
  console.log('listening on port ' + port);
});
