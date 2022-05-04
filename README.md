<h2># Lab4</h2>	

In this project, the challenge was to build a backend API using a combination of SQL and JavaScript to enable users to view data that is stored in a database as well as update data.

<h2> Dependacies </h2>
You must have these programs installs on your Linux machine, which is the Operating system of choice for this project.
  -Installing NodeJS and required NPM package are necessary to run this project
  -Installing ExpressJs as well is require
  
  <h3>Run in this Order for Node Installation</h3>
  -sudo apt update
  -sudo apt install nodejs
  -node -v 
 
 <h3>Run in this for npm/express Installation </h3>
  -sudo apt install npm
  
<h2> Running my project</h2>
Navigate to the directory of the folder where the project is cloned and run the command
*node .* or *node index.js*

You will be prompted that the server started sucessfully and the database has been connected if everything is installed correctly other you will be noted.

When the server is running open your browser of choice (I used google chrome) and type in localhost:3000, you will then be prompted with multiple options on to edit a database via changing the URL

Hi there, You are going to perform CRUD operations...<br></br>[CREATE]http://localhost:3000/add/(Name)/(Year)/(Make)/(Model)' to add a Racer......<br></br>               [READ] 'http://localhost:3000/view/(Car_ID)' to view a Racer... or  http://localhost:3000/view to view all Racers<br></br>                                                                         
[UPDATE] 'http://localhost:3000/update/(Car_ID)/(Name)' to update an racers name.....<br></br>               [DELETE] 'http://localhost:3000/del/(Car_ID)' to delete a Racer......

Follow the instructions and and input the necessary information to preform CRUD operations to the Database.



