var sqlite3 = require('sqlite3').verbose();
const { Console } = require('console');
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);
//app.listen(3000);


//Connect to database file
var db = new sqlite3.Database('./database/cars.db',(err)=>{
  if(err){
    console.log(err.message);
  }
  console.log('Conected to DB');
})
  



//Beginning Message when the user goes to LocalHost
app.get('/', function(req,res){
    res.send("<h3> Hi there, You are going to perform CRUD operations...<br></br>[CREATE]http://localhost:3000/add/(Name)/(Year)/(Make)/(Model)' to add a car......[READ] 'http://localhost:3000/view/(Car_ID)' to view a car......<br></br>[UPDATE] 'http://localhost:3000/update/()/()' to update an employee.....<br></br>[DELETE] 'http://localhost:3000/del/()' to delete an employee......<h3>");
  });

//CREATE
app.get('/add/:name/:year/:make/:model', function(req, res){
  db.serialize(()=>{
    db.each('SELECT * FROM Cars_Details WHERE Car_ID =?', [req.params.id],
    (error, info) => {
      if(error){
        res.write('Oops problem printing!')
        return console.log("Error printing")
      }
      res.write(`<p>${(JSON.stringify(info))}</p>`);
    });
  })
})


//Read ALL
app.get('/view', function(req, res){
  db.serialize(()=>{
    db.each('SELECT * FROM Cars_Details',
    (error, info) => {
      if(error){
        res.write('Oops problem printing!')
        return console.log("Error printing")
      }
      res.write(`<p>${(JSON.stringify(info))}</p>`);
    });
  })
})

//READ ONE
app.get('/view/:id', function(req, res){
  db.serialize(()=>{
    db.each('SELECT * FROM Cars_Details WHERE Car_ID =?', [req.params.id],
    (error, info) => {
      if(error){
        res.write('Oops problem printing!')
        return console.log("Error printing")
      }
      res.write(`<p>${(JSON.stringify(info))}</p>`);
    });
  })
})
  
  
  









/*Closing the Database
  app.get('/close', function(req,res){
    db.close((err) => {
      if (err) {
        res.send('There is some error in closing the database');
        return console.error(err.message);
      }
      console.log('Closing the database connection.');
      res.send('Database connection successfully closed');
    });
  });
*/

server.listen(3000, function(){
  console.log("server is listening on port: 3000");
});