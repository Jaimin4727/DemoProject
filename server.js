global.express = require('express');

var app = express();
//var router = express.Router();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
global.jsonParser = bodyParser.json();
var Sequelize = require('Sequelize');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

global.models = require('./models');
global.moment = require('moment-timezone');


var pg = require('pg');
var config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  max: 10,
  idleTimeoutMillis: 30000
}
global.connect = new pg.Pool(config);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization, Access-Control-Allow-Headers");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', function (req, res) {
  //res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/'));

var port = process.env.PORT || 3000;

app.use('/user', require('./controllers/user'));

server.listen(port, function () {
  console.log('listening on *: ' + port);
});

module.exports = app;
