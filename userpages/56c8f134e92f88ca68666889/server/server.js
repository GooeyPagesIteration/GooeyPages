const express = require('express'); 
const fs = require('fs');
const path = require('path'); 
const app = express(); 

app.get('/asdfasfd', (req, res) => {
	res.sendFile(path.join(__dirname,'./../client/asdfasfd.html'))
})

app.get('/asdfasfdzcvz', (req, res) => {
	res.sendFile(path.join(__dirname,'./../client/asdfasfdzcvz.html'))
})

