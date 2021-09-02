// The following code will load the express module
let express = require('express');
// The following code will create a reference to the express module
let app = express();

let http = require('http').Server(app);

// The following code will load express-ws module and create the reference 
// of express-ws with the help of express module reference using the IIFE
let io = require('socket.io')(http);

// let ws = require('express-ws')(app);

// http://localhost:9090
// The following code will open the html static web page 
app.get("/", (request, response) => {
  response.sendFile(__dirname + "//index.html");
})

// app.ws("/",(socket,request)=>{ 
  io.on("connection",(socket)=>{
    console.log("Client Connected");
    socket.on("obj",(msg)=>{
      console.log(msg);
      // response.send(msg);

    })
  
    socket.emit("obj1", "Hello Client, you are connected to the server...")
    socket.emit(Date());
  

  // receive message from client application 
  // socket.on("message", (msg) => {
  //   console.log("The Client says: " +msg);
    // print out the date and time when the message is received
  })

  // socket.send("Server says : You are successfully connected to the server!!!")


http.listen(9090, () => { console.log("Server is running on port 9090"); });

