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


mongoose.connect(url).then(()=>{console.log("Connected to Mongoose");
})

app.get("/add",(request,response)=> {
    response.sendFile(__dirname + "/template/addCourse.html");
})

app.get("/update", (request, response) => {
  response.sendFile(__dirname + "/template/updateCourse.html");
})

app.get("/delete", (request, response) => {
  response.sendFile(__dirname + "/template/deleteCourse.html");
})

app.get("/fetch", (request, response) => {
  response.sendFile(__dirname + "/template/fetchCourse.html");
})

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/template/index.html");
})

io.on('connection',(socket)=>{
  console.log('Client connected');

  socket.emit('startup','Hello, you are connected.');
})

socket.on('course_added',(newCourse)=>{
  let addedCourse = new courseCollection({_id:newCourse[0],name:newCourse[1],description:newCourse[2],course_price:newCourse[3]});
  courseCollection.create(addedCourse,(err,result)=>{
    if(!err) {
      socket.emit('added_response','New course added');
    }else {
      socket.emit('added_response','Error in adding course');
    }
  })
})

socket.on('course_removed',(deleted_course)=>{
  courseCollection.deleteOne({_id:deleted_course},(err,result)=>{
    if(result.deletedCount>0){
      socket.emit('removed_response','Course removed');
    }else {
      socket.emit('removed_response','Course not found');
    }
  })
})

socket.on('requested_courses',()=>{
  courseCollection.find({},(err,doc)=>{
    if(err){ socket.emit('Unsuccessful', 'Error in finding the intended course.')} else{
      socket.emit('fetched_courses',doc);
    }
  })
})


http.listen(3000,()=>console.log("Server is running on port number 3000."));