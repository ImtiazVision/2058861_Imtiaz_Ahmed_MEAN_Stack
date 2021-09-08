// loading express module
let express = require('express');
// loading body-parser module
let bodyParser = require('body-parser');

// loading mongoose module
let mongoose = require('mongoose');

// loading the cors module
let cors = require('cors');

const {response, request} = require('express');

// to avoid lower case collection creation and adding s postfix to collection name
mongoose.pluralize(null);

// referencing the express module
let app = express();
// using bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// adding cors and bodyParser middleware
app.use(cors());
app.use(bodyParser.json());

// creating an empty array to store the data
let courses = []

// connecting to the mongodb database

const url = 'mongodb://localhost:27017/course_database_project';
mongodb.connect(url).
then(res=>console.log("Connected")).
catch(err=>console.log(err));

// connecting the mongoose database
mongoose.connect(url).
then(()=>{console.log("Connected to Mongoose");
})

// path to the templates folder
app.get("/template/index", (request, response) => {
  response.sendFile('index.html', { root: __dirname });
})
app.get("/template/addCourse", (request, response) => {
  response.sendFile('addCourse.html', { root: __dirname });
})

app.get("/template/updateCourse", (request, response) => {
  response.sendFile('updateCourse.html', { root: __dirname });
})

app.get("/template/deleteCourse", (request, response) => {
  response.sendFile('deleteCourse.html', { root: __dirname });
})

app.get("/template/fetchCourse", (request, response) => {
  response.sendFile('fetchCourse.html', { root: __dirname });
})





http.listen(3000,()=>console.log("Server is running on port number 3000."));