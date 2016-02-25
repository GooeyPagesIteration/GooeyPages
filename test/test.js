var express = require('express');
var request = require('supertest');
var app = express();
var path = require('path');
var fs = require('fs');
var chai = require('chai');
var expect = require('chai').expect;
var app = require('./../server/server');
var request = require('supertest');
var supertestURL =require('supertest').agent('url');
var server = request.agent(app);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



//fix to be static

// var link = './../userpages/56c90a369866e79c0968d38d/';

describe("Check GooeyPages Functionality", function() {

  describe('should get login page', function(done){
    it('GET requests to / return status code of 200 & Content-Type of html', function(done){
      request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect(200, done);
    });
  });
  describe("Check login functionality",function(){
    it("Should be able to successfuly send in a username and password to the Data Base", function(done){
      request(app)
      .post('/login')
      .send(app.request.body = {username: 'carol', password: 'gonzalez'})
      //.expect(302)
      .end(function(err, res){
        if (err) return done(err)
          expect(res.headers).to.have.property('location').and.equal('/build');
          done();
      })
    });
  });





});



//   it('should respond with a redirect to /build', function(done){
//     request(app)
  //  .post('/build')
  //  .send({cookieId: '56cce422c667f54634c4afe7'})
//
//
//   })
//


//.expect('content-disposition', 'attachment; filename="download.zip"',done)
//.expect('Content-Type', /html/)


// describe("Only index.html should exist in client folder ", function(){
//
// });
//
// describe("Only style.css should exist in css folder ", function(){
//
// });
// describe("Only index.js should exist in js folder ", function(){
//
// });
// describe("Only server.js should exist in server folder ", function(){
//
// });
// describe("A package.json must exist", function(){
//
// });
