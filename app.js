const express = require('express');
const path = require('path');
const hbs = require('hbs');
const db = require('./app_api/models/db');
const apiRouter = require('./app_api/routes/index');

const indexRouter = require('./app_server/routes/index');
const travelRouter = require('./app_server/routes/travel');

const app = express();

// Register partials for Handlebars
hbs.registerPartials(path.join(__dirname, 'app_server/views/partials'));

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen(port, () => {
    console.log('Server running on port ' + port);
});