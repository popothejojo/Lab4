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
    res.send("<h3> Hi there, You are going to perform CRUD operations...<br></br>[CREATE]http://localhost:3000/add/(Name)/(Year)/(Make)/(Model)' to add a Racer......<br></br>                                                                      [READ] 'http://localhost:3000/view/(Car_ID)' to view a Racer... or  http://localhost:3000/view to view all Racers                                          <br></br>                                                                          [UPDATE] 'http://localhost:3000/update/(Car_ID)/(Name)' to update an racers name.....<br></br>                                                                      [DELETE] 'http://localhost:3000/del/()' to delete a Racer......<h3>");
  });

//CREATE
app.get('/add/:id/:name/:year/:make/:model', function(req,res){
  db.serialize(()=>{
    db.run('INSERT INTO Cars_Details (Car_ID , Name, Year, Make, Model) VALUES(?,?,?,?,?)', [req.params.id, req.params.name,req.params.year,req.params.make,req.params.model], function(err) {
      if (err) {
        return console.log(err.message);
      }
      console.log("New Racer has been added");
      res.send("New Racer has been added into the database with CAR_ID = "+req.params.id+ " and Name = "+req.params.name);
    });

  });

});

//READ ALL
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

//UPDATE
app.get('/update/:id/:name', function(req,res){
  db.serialize(()=>{
    db.run('UPDATE Cars_Details SET Name = ? WHERE Car_ID = ?', [req.params.name,req.params.id], function(err){
      if(err){
        res.send("Error encountered while updating");
        return console.error(err.message);
      }
      res.send("Entry updated successfully");
      console.log("Entry updated successfully");
    });
  });
});
 
//DELETE
app.get('/del/:id', function(req,res){
  db.serialize(()=>{
    db.run('DELETE FROM Cars_Details WHERE Car_ID = ?', req.params.id, function(err) {
      if (err) {
        res.send("Error encountered while deleting");
        return console.error(err.message);
      }
      res.send("Entry deleted");
      console.log("Entry deleted");
    });
  });

}); 









server.listen(3000, function(){
  console.log("server is listening on port: 3000");
});