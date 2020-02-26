var express = require('express');
var path = require('path');
var cors = require('cors')
var openRouter = require('./index');
var bodyParser = require('body-parser')
var app = express();
const whitelist = config.whiteList
var corsOptions = {
  "origin": whitelist,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "credentials":true,
  "optionsSuccessStatus": 204
}
app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true,limit:'5mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',openRouter);
module.exports = app;
