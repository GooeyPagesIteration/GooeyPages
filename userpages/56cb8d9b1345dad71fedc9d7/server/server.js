const express = require('express'); 
const fs = require('fs');
const path = require('path'); 
const app = express(); 

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'/../client/.html'))
})

app.get('/you', (req, res) => {
	res.sendFile(path.join(__dirname,'/../client/you.html'))
})

app.get("/css/style.css", (req, res) => {
      res.sendFile(path.join(__dirname,"/../css/style.css"))
    });
app.get("/js/index.js", (req, res) => {
      res.sendFile(path.join(__dirname,"/../js/index.js"))
    });

app.listen(3000);