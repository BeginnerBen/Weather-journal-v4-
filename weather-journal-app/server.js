/* website localhost:3000 works */
/* apt get works for localhost:3000/all */ 

/* website localhost:3000 works */
/* apt get works for localhost:3000/all */
/* post works on post man  */ 

/* Empty JS object to act as endpoint for all routes */
projectData = {name: "ben"};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

app.get('/all', sendData);


function sendData (request, response) {
  response.send(projectData);
};

app.post('/post', function (req, res) {
  res.send('POST received');
});

const data = [{movie: "heritory"}];
const body = [{movie:"body"}];
app.post('/addMovie', addMovie );

function addMovie (req, res){
  console.log(req.body);
  data.push(req.body);
  res.send(data);
}