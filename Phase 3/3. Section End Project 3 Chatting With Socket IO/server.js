// The following code will load the express module
let express = require('express');
// The following code will create a reference to the express module
let app = express();

// The following code will load express-ws module and create the reference 
// of express-ws with the help of express module reference using the IIFE

let ws = require('express-ws')(app);

// http://localhost:9090
// The following code will open the html static web page 
app.get("/", (request, response) => {
  response.sendFile(__dirname + "//index.html");
})

app.ws("/",(socket,request)=>{ 
  console.log("Client Connected");

  // receive message from client application 
  socket.on("message", (msg) => {
    console.log("The Client says: " +msg);
    // print out the date and time when the message is received
    socket.send(Date());
  })

  socket.send("Server says : You are successfully connected to the server!!!")
})


app.listen(9090, () => { console.log("Server is running on port 9090"); });

