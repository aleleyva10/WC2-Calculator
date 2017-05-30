//Globals
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Users
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

var findResult = [];
//Listen
app.listen(5678, function() {
  console.log('server up at 5678');
});

//Get path
app.get('/', function(req, res) {
  console.log('url was hit');
  res.sendFile(path.resolve('views/index.html'));
});

//function
app.post('/toAdd', function(req, res) {
  var x = Number(req.body.number1);
  var y = Number(req.body.number2);
  var number1 = parseInt(x);
  var number2 = parseInt(y);

  var addResult = {
    result: number1 + number2
  };
  res.send(addResult);
});

app.post('/toSubtract', function(req, res) {
  var x = Number(req.body.number1);
  var y = Number(req.body.number2);
  var number1 = parseInt(x);
  var number2 = parseInt(y);

  var subResult = {
    result: number1 - number2
  };
  res.send(subResult);
});

app.post('/toMultiply', function(req, res) {
  var x = Number(req.body.number1);
  var y = Number(req.body.number2);
  var number1 = parseInt(x);
  var number2 = parseInt(y);

  var mulResult = {
    result: number1 * number2
  };
  res.send(mulResult);
});

app.post('/toDivide', function(req, res) {
  var x = Number(req.body.number1);
  var y = Number(req.body.number2);
  var number1 = parseInt(x);
  var number2 = parseInt(y);

  var divResult = {
    result: number1 / number2
  };
  res.send(divResult);
});
