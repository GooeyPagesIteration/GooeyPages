var sessionController = require('./sessionController');

var cookieController = {};

cookieController.setSSIDCookie = setSSIDCookie;

function setSSIDCookie(res, id) {
  res.cookie('ssid', id, { httpOnly: true });
  sessionController.startSession(id);
}

module.exports = cookieController;
