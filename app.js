const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');
const passport = require('passport');
const db = require('./app_api/models/db');
const apiRouter = require('./app_api/routes/index');
const indexRouter = require('./app_server/routes/index');
const travelRouter = require('./app_server/routes/travel');

require('./app_api/config/passport');
require('dotenv').config();

const app = express();

app.use(express.json());           
app.use(express.urlencoded({ extended: true }));


app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(passport.initialize());


hbs.registerPartials(path.join(__dirname, 'app_server/views/partials'));
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');


app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);


app.use(express.static(path.join(__dirname, 'public')));


app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ "message": err.name + ": " + err.message });
  }
});

const port = 3000;
app.listen(port, () => {
    console.log('Server running on port ' + port);
});