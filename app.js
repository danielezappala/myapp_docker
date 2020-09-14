var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

console.log('NODE_ENV:' + process.env.NODE_ENV);
console.log('APP_HOST: ' + process.env.APP_HOST); 
console.log('APP_PORT: ' + process.env.APP_PORT); 


// router setup
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contacts/contactsList');
var programRouter = require('./routes/programs/programsList');
//var initData = require('./util/initData')


// app setup
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());


app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contacts', contactRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
