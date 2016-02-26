const User = require('./userModel');
const path = require('path');
const bcrypt = require('bcryptjs');
const cookieController = require('./cookieController.js');
const sessionController = require('./sessionController.js');
const fs = require('fs');
const userController = {};






userController.createUser = function(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.render(path.join(client, 'signup'), {error: 'Must include username and password'});
  }

  var newUser = new User({
    username: req.body.username,
    password: req.body.password
  });
  newUser.save(function(err, result) {
  	if (err) return res.render('./../client/signup', {error: 'Username invalid'});

    User.findOne({username: req.body.username,}, (err, result) => {
      fs.mkdir(`userpages/${result._id}`, (err) => {
        if(err) return console.log(err);
        fs.mkdir(`userpages/${result._id}/client`, (err => {
          if(err) return console.log(err);
          fs.mkdir(`userpages/${result._id}/server`, (err => {
            fs.mkdir(`userpages/${result._id}/js`, (err => {
              fs.mkdir(`userpages/${result._id}/css`, (err => {
                fs.createReadStream(path.join(__dirname,'../../templates/package.json')).pipe(fs.createWriteStream(path.join(__dirname,`../../userpages/${result._id}/package.json`)));
                fs.createReadStream(path.join(__dirname,'../../templates/index.js')).pipe(fs.createWriteStream(path.join(__dirname,`../../userpages/${result._id}/js/index.js`)));
                fs.createReadStream(path.join(__dirname,'../../templates/style.css')).pipe(fs.createWriteStream(path.join(__dirname,`../../userpages/${result._id}/css/style.css`)));
              }));
            }));
          }));
          cookieController.setSSIDCookie(res, result._id);
          res.redirect('/build');
        }));
      });
    });
  });
};




///////////////
//Got here from having done a post request- if username & PW- to the /login route
///////////////

userController.verifyUser = function(req, res) {
  // if no username or password provided
  console.log('is this here?',req.body)
  if (!req.body.username || !req.body.password) {
    return res.redirect('/signup');
  }
  // username/password is incorrect
  User.findOne({username: req.body.username}, function(err, result) {

    // IF username not found
    if (err || !result) return res.redirect('/signup');

    result.comparePassword(req.body.password, function(err, pswdCheck) {
      if(!pswdCheck) return res.redirect('/signup');
      cookieController.setSSIDCookie(res, result._id);

/////////////////////
// REDIRECT!
/////////////////////
      res.redirect('/newTemp');
    });
  });
};





module.exports = userController;
