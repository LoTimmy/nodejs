'use strict';
// 导入所需模块
const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const debug = require('debug')('Ibu9zei7');
const session = require('express-session'),
  bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const _ = require('lodash');

const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

var users = [
  { id: 1, user: 'barney', age: 36, active: true },
  { id: 2, user: 'fred', age: 40, active: false },
  { id: 3, user: 'pebbles', age: 1, active: true },
];

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  var user = users[_.findIndex(users, { id: id, active: true })];
  if (!user) {
    done(user);
  }
});

passport.use(
  new LocalStrategy((username, password, done) => {
    var user = users[_.findIndex(users, { user: username, active: true })];
    if (!user) {
      return done(null, false);
    }
    return done(null, user);

    // User.findOne({ username: username }, (err, user) => {
    //   if (err) {
    //     return done(err);
    //   }
    //   if (!user) {
    //     return done(null, false, { message: "Incorrect username." });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: "Incorrect password." });
    //   }
    //   return done(null, user);
    // });
  }),
);

const hostname = '0.0.0.0';
// const port = 3000;
const port = process.env.PORT || 3000;

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' },
);

const app = express();

app.use(
  session({
    secret: 'Wair0pho',
    resave: true,
    saveUninitialized: true,
  }),
);
// app.use(expressJwt({ secret: "secret123" }).unless({ path: ["/token"] }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('combined', { stream: accessLogStream }));

app.use('/', express.static('public'));
app.use(
  '/bower_components',
  express.static(path.join(__dirname, 'bower_components')),
);

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
);

// app.post("/login", passport.authenticate("local"), (req, res) => {
//   res.redirect("/users/" + req.user.username);
// });

app.get('/about', (req, res) => {
  debug(req.method + ' ' + req.url);
  res.send('about');
});

app.get(
  '/protected',
  expressJwt({ secret: 'secret123' }),
  (req, res, next) => {
    // if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
    next();
  },
  (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      console.log(err.name);
      console.log(err.code);
      console.log('Unauthorized');
      return res.sendStatus(401);
    }
  },
);

app.all('/secret', (req, res) => {
  debug(req.method + ' ' + req.url);
  console.log('Accessing the secret section ...');
  res.sendStatus(200);
});

// app.use((err, req, res, next) => {
app.use((err, req, res) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  }
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// app.listen('/tmp/sock');

app.listen(port, hostname, () => {
  debug('listening');
  console.log(`Express server listening on port ${port}`);
});
