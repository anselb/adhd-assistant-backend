const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config()

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))
mongoose.set('debug', true)

require('./controllers/auth')(app);
require('./controllers/stories')(app);
require('./controllers/storyComponents')(app);

app.get('/', function(req, res) {
  res.send('The Story API is running!')
})

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));

module.exports = app;
