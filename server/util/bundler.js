const fs = require('fs');
const path = require('path');

/////////////////
// creating the server file that gets sent ot the user along in their download
/////////////////
const Bundler = {};

Bundler.bundle = function(req,res, next) {
  //find files to bundle
  fs.readdir(path.join(__dirname, `../../userpages/${req.cookies.ssid}/client`), (err, files) => {
    if (err) throw err;

    //create server.js file with routes to each html page
    serverText =  "const express = require('express'); \nconst fs = require('fs');\nconst path = require('path'); \nconst app = express(); \n\n";

    //add file paths to html files
    for(var i in files) {
      serverText += `app.get('/${files[i].replace(/(.html)$/g,'')}', (req, res) => {\n\tres.sendFile(path.join(__dirname,'/../client/${files[i]}'))\n})\n\n`;
    }
    //add css file path
    serverText += `app.get("/css/style.css", (req, res) => {
      res.sendFile(path.join(__dirname,"/../css/style.css"))
    });\n`;
    //add particle functionality
    serverText += `app.get("/js/index.js", (req, res) => {
      res.sendFile(path.join(__dirname,"/../js/index.js"))
    });\n`;
    //listen port
    serverText += '\napp.listen(3000);';

    // console.log(serverText);
    //write actual file
    fs.writeFile(path.join(__dirname, `../../userpages/${req.cookies.ssid}/server/server.js`), serverText, (err) => {
      if (err) throw err;
    });

    next();
  });
};

module.exports = Bundler;
