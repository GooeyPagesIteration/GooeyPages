var Session = require('./sessionModel');

var sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
sessionController.isLoggedIn = function(req, res, next) {
  Session.findOne({cookieId: req.cookies.ssid}, function(err, result) {
    if (err || !result) return res.redirect('/');
    next();
  });
};


sessionController.logout = function(id){
  Session.findOne({cookieId: id}).remove().exec();
};
/**
* startSession - create a new Session model and then save the new session to the
* database.
*/
sessionController.startSession = function(cookieId, callback) {
  Session.create({cookieId: cookieId});
};

module.exports = sessionController;
