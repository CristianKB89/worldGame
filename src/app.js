var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride =  require('method-override');
var session = require('express-session');
var usersRouter = require('./routes/usersRouter');
var productsRouter = require('./routes/productsRouter');
var comunityRouter = require('./routes/comunityRouter');
var shoppingCartRouter = require('./routes/shoppingCartRouter')
var indexRouter = require('./routes/indexRouter');
var productsRouterApi = require('./api/routes/productsRouterApi');
var usersRouterApi = require('./api/routes/usersRouterApi');
var productsControllerApi = require('./api/routes/productsRouterApi');
var comunityRouterApi = require('./api/routes/comunityRouterApi')

var app = express();

const menuIsLogged = require('./middlewares/menuIsLogged');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(session({secret: 'secret', resave:false,saveUninitialized:false}));
app.use(menuIsLogged)

// Cors 
const cors = require('cors');
app.use(cors())


//routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/community', comunityRouter);
app.use('/shoppingCart', shoppingCartRouter)

//routes Api
app.use('/api/products', productsRouterApi)
app.use('/api/users', usersRouterApi);
app.use('/api/products', productsControllerApi)
app.use('/api/community', comunityRouterApi)

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
