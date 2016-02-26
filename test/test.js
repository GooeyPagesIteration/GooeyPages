var express = require('express');
var request = require('supertest');
var app = express();
var path = require('path');
var fs = require('fs');
var chai = require('chai');
var expect = require('chai').expect;
var app = require('./../server/server');
var request = require('supertest');
//var supertestURL =require('supertest').agent('url');
//var server = request.agent(app);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
//const cookieParser = require('cookie-parser');
//app.use(cookieParser());



describe("Check GooeyPages Functionality", function() {
var ssidcookie;
  describe('should get login page', function(done){
    it('GET requests to / return status code of 200 & Content-Type of html', function(done){
      request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect(200, done);
    });
  });
  describe("Check login functionality",function(){
    it("Should be able to successfuly find a username and password to the Data Base", function(done){
      request(app)
      .post('/login')
      .send(app.request.body = {username: 'carol', password: 'gonzalez'})
      //.expect(302)
      .end(function(err, res){
        if (err) return done(err)
          expect(res.headers).to.have.property('location').and.equal('/build');
          //console.log('cookie?',res.header['set-cookie'])
          ssidcookie = res.header['set-cookie'][0];
          done();
      })
    });
    // it('Should be able to get main page build.html', function(done){
    //   request(app)
    //     .get('/build')
    //     .expect(200,done)
    //
    // });
  describe("Download folder should hold/save the proper files", function(){

   // fs.readdir('./userpages/download', function(err, files){
   //     var array = [];
   //     if(err) return err;
   //     files.forEach(function(file){
   //         array.push(file);
   //     })
   //     console.log(array);
   // });


  // it("Only index.html should exist in client folder", function(done){

    // fs.readdir('./userpages/56cb8d9b1345dad71fedc9d7/client', function(err, files){
    //     var array = [];
    //     if(err) return err;
    //     files.forEach(function(file){
    //         array.push(file);
    //     })
    //     expect(array[0]).to.equal('index.html')
    //     expect(array.length).to.equal(1);
    //     done();
    // });

  //});

  it("Only style.css should exist in css folder ", function(){

    fs.readdir('./userpages/56cb8d9b1345dad71fedc9d7/css', function(err, files){
        var array = [];
        if(err) return err;
        files.forEach(function(file){
            array.push(file);
        })
        expect(array[0]).to.equal('style.css')
        expect(array.length).to.equal(1);
        done();
    });

  });

  it("Only index.js should exist in js folder ", function(){
    fs.readdir('./userpages/56cb8d9b1345dad71fedc9d7/js', function(err, files){
        var array = [];
        if(err) return err;
        files.forEach(function(file){
            array.push(file);
        })
        expect(array[0]).to.equal('index.js')
        expect(array.length).to.equal(1);
        done();
    });
  });

  it("Only server.js should exist in server folder ", function(){
    fs.readdir('./userpages/56cb8d9b1345dad71fedc9d7/server', function(err, files){
        var array = [];
        if(err) return err;
        files.forEach(function(file){
            array.push(file);
        })
        expect(array[0]).to.equal('server.js')
        expect(array.length).to.equal(1);
        done();
    });
  });

  it("A package.json must exist", function(){
    fs.readdir('./userpages/56cb8d9b1345dad71fedc9d7', function(err, files){
        var array = [];
        if(err) return err;
        files.forEach(function(file){
         array.push(file);
       });

       expect(array.contains('package.json'));

    });
  });

});
});
});
