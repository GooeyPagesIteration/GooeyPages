const express = require('express');
const fs = require('fs');
const path = require('path');
const bundler = require('./util/bundler.js');
const EasyZip = require('easy-zip').EasyZip;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sessionController = require('./util/sessionController.js');
const cookieController = require('./util/cookieController.js');
const userController = require('./util/userController.js');
const mongoose = require('mongoose');
const saver = require('./util/saver.js');
const app = express();
const mongoURI = 'mongodb://localhost/gooeypages';
mongoose.connect(mongoURI);


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));
app.use(cookieParser());




//home page
app.get('/', function(req, res) {
  // this is serving index.ejs
  res.render('./../client/index');
});

//we post to /login the username and PW inputted to login
app.post('/login', userController.verifyUser);


//build page after login
app.get('/build', sessionController.isLoggedIn, (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/build.html'));
});
app.get('/newTemp', sessionController.isLoggedIn, (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/newTemp.html'));
});


app.post('/save', saver, (req, res) => {
  console.log(req.cookies.ssid);
});


//download function (that lives in client/js/buttons.js) brings you here
app.use('/download', bundler.bundle);
app.get('/download', (req, res) => {
  //zip folder and sends to user
  var zip = new EasyZip();
  zip.zipFolder(path.join(__dirname,`./../userpages/${req.cookies.ssid}`), (err) => {
    if(err) console.log(err);
    zip.writeToResponse(res,'download');
  });
});


app.post('/signup', userController.createUser);
app.get('/signup', function(req, res) {
  res.render('./../client/signup');
});


app.use('/logout', cookieParser());
app.get('/logout', function(req, res) {
  sessionController.logout(req.cookies.ssid);
  res.redirect('/');
});



app.listen(3000);
