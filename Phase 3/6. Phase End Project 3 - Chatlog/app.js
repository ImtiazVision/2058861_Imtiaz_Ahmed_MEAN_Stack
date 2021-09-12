// load the express module
let express = require('express');
// const {ServerResponse} = require('http');
// const {response, request} = require('express');
let bodyParser = require('body-parser');
//reference the express 
let app = express();
// load the mongoose module
let mongoose = require('mongoose');
// to avoid lowercase, we pluralize mongoose to avoid the issue 
mongoose.pluralize(null);
// load the http module to connect with express
let http = require('http').Server(app);
// load the socket.io module to connect with http IIFE features
let io = require('socket.io')(http);

// implementation of database connection
let url = 'mongodb://localhost:27017/tcsmean';
mongoose.connect(url).
then(res=>console.log('Connected')).
catch(err=>console.log(err));

const messageModel = require('./model/schemaMessage');

// html file connection
app.get('/',(request, response)=>{
    response.sendFile(__dirname + '//index.html');
})

var messageArr = []; // array to store messages
var messageId = 0; // id of the message

// Schema creation 
// let chatSchema = mongoose.Schema({
//   _id:Number,
//   name:String,
//   message:String
// });

// using schema we have to create the model 
//1st param collection name | 2nd param schema reference
// let chatModel = mongoose.model('chat',chatSchema);

// Upon connection, print on console
io.on('connection',(socket)=>{ 
  console.log('Client connection established');

  // receive the initial message from client
  socket.on('message',(msg)=>{
    //print the message on console
    // console.log(msg);
    messageArr[1]= msg;
    console.log("Client message is: " + msg);
    // socket.emit('server_initial','Hello Client!, I am the server!');
  })

  // receive the message from client
  socket.on('time-sent',(timestamp)=>{
    // console.log(name + 'states: ' + chat + ' and | the ID is ' + count);
    // create a new chat object reference
    messageArr[2] = timestamp;
    console.log("You sent the message at : " + timestamp);
    console.log('');
    messageId++; // increment the message id
    let chatMessage = new chatModel(
      {_id:messageId,
      name:messageArr[0],
      message:messageArr[1],
      timestamp:messageArr[2]
    });

    ChatModel.insertMany(chatMessage,(err,res)=>{ 
      if(!err) {
        console.log('Message inserted successfully');
      } else {
        console.log(err);
      }
    });
    // console.log(chatMessage); // print the message on console

    // send the message to database via inserting data into collection
    // chatModel.insertMany(chatMessage,(err,res)=>{
    //   if(!err){
    //     console.log('Data inserted and Message sent successfully');
    //   }else {
    //     console.log('Error!! in sending message!!!')
    //   }
    // })
  })
  socket.on('disconnect',()=>{
    console.log('Client disconnected');
  })
})


// Server listening on port 9090
http.listen(9090,()=>{
  console.log('Server listening on port 9090');
});