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

// referencing the express module. Every time we call app.listen, we are actually calling the express module
let app = express();
// using bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// adding cors and bodyParser middleware
app.use(cors());
app.use(bodyParser.json());

// creating an empty array to store the data
let courses = []

// connecting to the mongodb database. 'course_database_project' is the name of the database

let url = 'mongodb://localhost:27017/course_database_project';
mongoose.connect(url).
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

// initiating/defining mongoose schema
let db = mongoose.connection;
db.once('open',()=> { 
  let courseSchema = mongoose.Schema({ 
    _id:String,
    cname:String,
    description:String,
    amount:Number
  });

  // using schema we have to create the model 
  //1st param collection name | 2nd param schema reference
  let courseModel = mongoose.model("Course", courseSchema);

  // path directory for functions. Addition of courses
  app.post('/add',(request, response)=>{
    let courseInfo = request.body;
    courses.push(courseInfo);

    // Using model we are creating the reference to be added to the database
    let course = new courseModel({ 
      _id:courseInfo.cID,
      cname:courseInfo.cName,
      description:courseInfo.description,
      amount:courseInfo.amount
    });

    // inserting course to the database
    courseModel.insertMany(course, (err, res)=>{ 
      if(!err){
        response.send("Course added successfully");
      }else{
        response.send("Error adding course as Course ID must be unique");
      }
    })
  })

  // path directory for functions. Deletion of courses
  app.get('/delete',(request, response)=>{
    let cID = request.query.cID;

    courseModel.deleteOne({
      _id:cID
    },(err,res)=>{
      if(!err){
        response.send("Course deleted successfully");
      }else{
        if(res.deletedCount == 0){
          response.send("Couldn't find a course with the given ID ", + cID);
        }
      }
      response.end();
    })
  })

  // path directory for functions. Updating of courses
  app.get('/update',(request, response)=>{
    let newAmount = request.query.amount;
    let cID = request.query.cID;

    courseModel.updateOne({
      _id:cID},
      {$set:{amount:newAmount}},
      (err,res) => {
        if(!err){
          response.send("Course updated successfully");
        }else {
          if(res.modifiedCount == 0){
            response.send("Couldn't find a course with the given ID ", + cID);
          }
        }
      })
  })

  // path directory for functions. Fetching of courses
  app.get('/fetchCourse',(request, response)=>{
    var tableContent = '';
    var startTable = `<table border=1>
                      <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                      </tr>`;
    var endTable = `</table>`;

    courseModel.find({},(err,res)=>{
      if(!err){
        data.forEach(c=>{
          tableContent += `<tr>
                            <td>${c._id}</td>
                            <td>${c.cname}</td>
                            <td>${c.description}</td>
                            <td>${c.amount}</td>
                          </tr>`;
        })
        response.write(startTable + tableContent + endTable);
      }
    })
  })

})



app.listen(9090,()=>console.log("Server is running on port number 9090."));